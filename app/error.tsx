'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // TODO: Log to error reporting service when analytics is set up
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-6xl font-medium text-text-subtle">Error</p>
        <h1 className="mt-4 text-xl font-medium text-text">Something went wrong</h1>
        <p className="mt-2 text-text-muted">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-block mt-8 px-6 py-3 text-sm font-semibold bg-primary-800 text-text-inverse rounded-[var(--radius-md)] hover:bg-primary-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
        >
          Try again
        </button>
      </div>
    </div>
  );
}