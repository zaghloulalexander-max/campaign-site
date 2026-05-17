import Link from 'next/link';
import { ArrowIcon } from '@/app/components/ui/icons';

// ============================================================================
// TYPES
// ============================================================================

export interface ReadMoreItem {
  title: string;
  href: string;
}

interface ReadMoreProps {
  items: readonly ReadMoreItem[];
}

// ============================================================================
// COMPONENT
// ============================================================================

export default function ReadMore({ items }: ReadMoreProps) {
  if (items.length === 0) return null;

  return (
    <nav className="mt-20 pt-12 border-t border-border" aria-label="Read more">
      <p className="text-sm font-semibold text-text-subtle tracking-wide">
        Read more
      </p>

      <div className="mt-6 flex flex-col gap-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group inline-flex items-center gap-2 text-lg font-semibold text-text hover:text-primary-700 transition-colors duration-150 motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
          >
            <span>{item.title}</span>
            <ArrowIcon size="sm" className="transition-transform duration-150 ease-out group-hover:translate-x-1 motion-reduce:transition-none" />
          </Link>
        ))}
      </div>
    </nav>
  );
}