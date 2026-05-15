import en from './en';
import es from './es';
import type { Dictionary } from './en';

// ============================================================================
// SUPPORTED LOCALES
// ============================================================================

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

// ============================================================================
// DICTIONARY LOOKUP
// ============================================================================

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries[defaultLocale];
}

export type { Dictionary };