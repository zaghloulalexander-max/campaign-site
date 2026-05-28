'use client';

import { usePathname } from 'next/navigation';

export default function VideoCredit() {
  const pathname = usePathname();
  if (pathname !== '/') return null;
  return (
    <p className="text-xs text-text-subtle mt-2">
      Video: <a href="https://www.videezy.com/" className="hover:underline" target="_blank" rel="noopener noreferrer">Videezy</a>
    </p>
  );
}