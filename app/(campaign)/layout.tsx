import type { ReactNode } from 'react';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import CookieBanner from '@/app/components/ui/CookieBanner';
import { ModalStackProvider } from '@/app/contexts/ModalStackContext';

// Shared layout for all campaign pages — Header + Footer chrome.
export default function CampaignLayout({ children }: { children: ReactNode }) {
  return (
    <ModalStackProvider>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <CookieBanner />
    </ModalStackProvider>
  );
}