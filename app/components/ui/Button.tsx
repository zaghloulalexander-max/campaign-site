import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  href?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-primary-600 text-text-inverse hover:bg-primary-700 active:bg-primary-800 shadow-sm',
  secondary:
    'bg-accent-500 text-text-inverse hover:bg-accent-600 active:bg-accent-600 shadow-sm',
  outline:
    'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100',
  ghost:
    'text-primary-600 hover:bg-primary-50 active:bg-primary-100',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className = '',
  ...props
}: ButtonProps) {
  const styles = `
    inline-flex items-center justify-center font-semibold
    rounded-[var(--radius-md)] transition-all duration-200
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500
    cursor-pointer
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `.trim();

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
