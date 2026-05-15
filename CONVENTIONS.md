# Conventions

## Architecture

- **Next.js 15 App Router** with route groups
- `(campaign)/` group wraps all pages with shared Header, Footer, and ModalStackProvider via `layout.tsx`
- Privacy page lives inside the campaign group at `(campaign)/privacy/`
- Root `layout.tsx` handles fonts, metadata, skip-to-content link, `<html>/<body>` only
- `app/not-found.tsx` handles 404s globally

## Components

- `components/ui/` — Reusable primitives (Button, Card, Section, Modal, Input, IconButton, ProgressTabs). No business logic.
- `components/layout/` — Structural (Header, Footer). Config-driven via `lib/config.ts`.
- `components/sections/` — Page-level blocks (Hero, About, Issues, EndorsementShowcase, EndorsementCard, Donate, Volunteer, VolunteerModal). Each is self-contained.
- `contexts/` — ModalStackContext for modal z-index management and scroll locking.
- `hooks/` — useAutoAdvance (endorsement carousel), useMediaQuery / useIsTouchDevice (input autofocus).

## Design Tokens

- Defined as CSS custom properties in `globals.css` via `@theme inline`
- Palette: warm charcoal primary, warm ivory surfaces, monochrome buttons (no accent color)
- Typography: Inter (body, headings, UI), Libre Baskerville (endorsement quotes only)
- Border radius: `--radius-sm` (2px), `--radius-md` (4px), `--radius-lg` (6px), `--radius-xl` (8px)
- Spacing: generous — white space is a feature

## Button

- Polymorphic: renders as `<button>` or `<a>` via `as` prop
- Variants: `primary` (charcoal, for light backgrounds), `secondary` (warm white, for dark backgrounds), `outline`, `ghost`, `link`
- Supports: `loading`, `disabled`, `fullWidth`, `iconOnly`, `animatedIcon`
- Icon-only buttons require `aria-label`
- No external dependencies (no clsx — uses filter/join)

## Header

- Uses `usePathname()` to detect landing page vs sub-pages
- Landing page: full nav, donate button, mobile menu, dark/light section detection
- Sub-pages: wordmark only, no nav, forced light mode
- Dark section detection via scroll position — checks `DARK_SECTION_IDS` array
- Scrollbar width compensation via `--scrollbar-width` CSS variable for modal scroll lock

## Modal System

- Ported from zaghloulco — portal rendering, focus trap, escape key, scroll locking
- ModalStackContext manages z-index stacking and body overflow
- Animated enter/exit via framer-motion
- VolunteerModal: 4 fields (first name, last name, email, zip), validation, sanitization

## Config

- `app/lib/config.ts` is the single source of truth for candidate info, nav, social links, donate URL, disclaimer
- All components pull from config — no hardcoded candidate details in components

## Accessibility

- Skip-to-content link in root layout
- `aria-labelledby` on sections
- `aria-label` on all interactive elements
- `focus-visible:ring` on all interactive elements
- `motion-reduce:transition-none` throughout
- `sr-only` labels on form inputs
- `autoComplete` attributes on form fields
- Focus trap in modals
- `role="dialog"`, `aria-modal` on modals
- `role="banner"` on header, `role="contentinfo"` on footer

## Fonts

- **Inter** — everything: body, headings, nav, buttons, wordmark
- **Libre Baskerville** — endorsement quotes only (loaded via `--font-serif` variable)
- The candidate's name always appears in Inter — no decorative fonts on the name

---

## TODO — Requires Content or Decisions

### Content Needed
- Hero photo/video (environmental shot of Nabil, or b-roll of District 2)
- About section headshot/portrait
- Donate section community photo (full-width with dark overlay)
- Endorser headshots (square format)
- About section copy (2-3 paragraphs, personal, not a resume)
- Issue positions (real copy to replace Latin placeholders)
- Endorsement quotes (real quotes from real people)

### Configuration Needed
- Social media URLs (Instagram, Twitter/X, Facebook) → update `config.ts`
- Donation URL (ActBlue or similar) → update `config.ts` donateUrl
- Campaign committee legal name → confirm disclaimer text
- Domain (electnabil.com or similar) → update `config.ts` meta.url

### Technical Wiring
- Volunteer form → connect to Resend API route
- OG image → design and add to `/public` + metadata
- Cookie consent banner → implement
- Favicon → verify SVG renders correctly across browsers

### Future
- **Spanish language support** — route-based i18n via `[locale]` segment under `(campaign)`. Translate from finalized English. Not machine translation.
- **Events page** — add when campaign is running regular public events
- **Detailed issues pages** — expand from one-liners to full positions
- **Mobile testing** — verify all sections, modal, header behavior on actual devices