import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Libre_Baskerville } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const libreBaskerville = Libre_Baskerville({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://electnabil.com'),
  title: {
    default: 'Nabil for District 2 — Multnomah County Commissioner',
    template: '%s | Nabil for District 2',
  },
  description: 'Over 32 years inside the county\'s housing, behavioral health, and public safety systems. Running for Multnomah County Commissioner, District 2.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'District 2',
    description: 'Over 32 years inside the county\'s housing, behavioral health, and public safety systems. Running for Multnomah County Commissioner, District 2.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nabil for District 2',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#1f1e1c',
};

import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://donation.c-esystems.com" />
      </head>
      <body className={`${inter.variable} ${libreBaskerville.variable} antialiased`}>
        {/* Skip to main content — keyboard accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-surface focus:text-text focus:px-4 focus:py-2 focus:rounded-[var(--radius-md)] focus:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}