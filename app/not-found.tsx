import Link from 'next/link';
import { getDictionary, defaultLocale } from '@/app/lib/i18n';

export default function NotFound() {
  const dict = getDictionary(defaultLocale).notFound;

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-6xl font-medium text-text-subtle">{dict.code}</p>
        <h1 className="mt-4 text-xl font-medium text-text">{dict.title}</h1>
        <p className="mt-2 text-text-muted">{dict.message}</p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 text-sm font-semibold bg-primary-800 text-text-inverse rounded-[var(--radius-md)] hover:bg-primary-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
        >
          {dict.backHome}
        </Link>
      </div>
    </div>
  );
}