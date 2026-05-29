import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { checkRateLimit, getClientIp, getRateLimitHeaders } from '@/app/lib/rate-limit';

const resend = new Resend(process.env.RESEND_API_KEY);

const volunteerSchema = z.object({
  firstName: z.string().min(1, 'First name is required').transform((v) => v.trim()),
  lastName: z.string().min(1, 'Last name is required').transform((v) => v.trim()),
  email: z.string().email('Invalid email').transform((v) => v.toLowerCase().trim()),
  zip: z.string().min(5, 'Invalid zip code').transform((v) => v.trim()),
});

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const rateLimit = checkRateLimit(ip, 'volunteer');

    if (!rateLimit.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: getRateLimitHeaders(rateLimit) },
      );
    }

    const body = await req.json();
    const result = volunteerSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0].message },
        { status: 400, headers: getRateLimitHeaders(rateLimit) },
      );
    }

    const { firstName, lastName, email, zip } = result.data;

    const { error } = await resend.emails.send({
      from: 'Elect Nabil <noreply@electnabil.com>',
      to: process.env.CAMPAIGN_EMAIL || 'info@electnabil.com',
      subject: `Volunteer: ${firstName} ${lastName}`,
      replyTo: email,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 500px;">
          <p style="margin: 0 0 4px 0; color: #666; font-size: 14px;">Name</p>
          <p style="margin: 0 0 16px 0; color: #000;">${firstName} ${lastName}</p>
          <p style="margin: 0 0 4px 0; color: #666; font-size: 14px;">Email</p>
          <p style="margin: 0 0 16px 0; color: #000;"><a href="mailto:${email}">${email}</a></p>
          <p style="margin: 0 0 4px 0; color: #666; font-size: 14px;">Zip code</p>
          <p style="margin: 0; color: #000;">${zip}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to submit' },
        { status: 500, headers: getRateLimitHeaders(rateLimit) },
      );
    }

    return NextResponse.json(
      { success: true },
      { headers: getRateLimitHeaders(rateLimit) },
    );
  } catch (error) {
    console.error('Volunteer error:', error);
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}