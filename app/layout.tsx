import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Source_Sans_3, Source_Serif_4 } from 'next/font/google';

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: '[Name] for Portland',
    template: '%s | [Name] for Portland',
  },
  description: 'Running for Multnomah County Commissioner. Building a Portland that works for everyone.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: '[Name] for Portland',
    description: 'Running for Multnomah County Commissioner. Building a Portland that works for everyone.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} ${sourceSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
