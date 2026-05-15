import type { ReactNode } from 'react';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import CookieBanner from '@/app/components/ui/CookieBanner';
import { ModalStackProvider } from '@/app/contexts/ModalStackContext';
import { getDictionary, defaultLocale } from '@/app/lib/i18n';

// TODO: When [locale] route segment is added, derive locale from params
const dict = getDictionary(defaultLocale);

export default function CampaignLayout({ children }: { children: ReactNode }) {
  return (
    <ModalStackProvider>
      <Header dict={dict.header} donateLabel={dict.donate.button} />
      <main id="main">{children}</main>
      <Footer dict={dict.footer} />
      <CookieBanner dict={dict.cookie} />
    </ModalStackProvider>
  );
}