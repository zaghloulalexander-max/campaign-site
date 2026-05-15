import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-6xl font-medium text-text-subtle">404</p>
        <h1 className="mt-4 text-xl font-medium text-text">
          Page not found
        </h1>
        <p className="mt-2 text-text-muted">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 text-sm font-semibold bg-primary-800 text-text-inverse rounded-[var(--radius-md)] hover:bg-primary-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}