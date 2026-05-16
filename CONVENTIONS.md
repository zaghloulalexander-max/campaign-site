# Conventions

## Architecture

- **Next.js 15 App Router** with route groups
- `(campaign)/` group wraps all pages with shared Header, Footer, CookieBanner, and ModalStackProvider via `layout.tsx`
- Privacy page lives inside the campaign group at `(campaign)/privacy/`
- Root `layout.tsx` handles fonts, metadata, skip-to-content link, favicon, `<html>/<body>` only
- `app/not-found.tsx` handles 404s globally

## i18n

- All user-facing strings live in `app/lib/i18n/en.ts` (English) and `app/lib/i18n/es.ts` (Spanish placeholder)
- Components receive text via `dict` props — no hardcoded copy in any component
- To change any text on the site, edit `en.ts`. No component files need to be touched.
- `Dictionary` interface defined in `en.ts` — uses `string` (not literal types) so translations can differ
- Spanish dictionary uses `satisfies Dictionary` for type checking without literal locking
- Route-based i18n via `[locale]` segment is prepped but not yet activated
- When activated, locale derives from URL params and passes through layout to all components

## Components

- `components/ui/` — Reusable primitives (Button, Card, Section, Modal, Input, IconButton, ProgressTabs, CookieBanner). No business logic.
- `components/layout/` — Structural (Header, Footer). Config-driven via `lib/config.ts`, i18n via dict props.
- `components/sections/` — Page-level blocks (Hero, About, Issues, EndorsementShowcase, EndorsementCard, Donate, Signup, SignupModal, VolunteerModal). Each is self-contained.
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
- Sizes: `sm` (header), `md` (sections), `lg` (available)
- Supports: `loading`, `disabled`, `fullWidth`, `iconOnly`, `animatedIcon`
- Icon-only buttons require `aria-label`
- No external dependencies (no clsx — uses filter/join)

## Header

- Uses `usePathname()` to detect landing page vs sub-pages
- Landing page: full nav, donate button, mobile menu, dark/light section detection
- Sub-pages (privacy, etc.): wordmark only, no nav, no donate button, forced light mode
- Dark section detection via scroll direction-aware check — `DARK_SECTION_IDS` array
- Scrolling down: checks from bottom of header (changes when new section meets header)
- Scrolling up: checks from top of viewport (changes when section clears the top)
- Three background states: transparent (top of page), frosted dark (scrolled over dark section), frosted light (scrolled over light section)
- Scrollbar width compensation via `--scrollbar-width` CSS variable for modal scroll lock
- Donate button variant swaps: `secondary` (white) on dark, `primary` (charcoal) on light

## Modal System

- Ported from zaghloulco — portal rendering, focus trap, escape key, scroll locking
- ModalStackContext manages z-index stacking and body overflow
- Animated enter/exit via framer-motion
- Two modals: SignupModal (email + zip) and VolunteerModal (first name, last name, email, zip)
- Both follow identical patterns: IconButton close, sanitization, per-field validation, loading state, thank you state

## Signup Section

- Replaces the old Volunteer section
- Text left (sustainable campaign messaging + volunteer link), button right ("Stay Updated")
- Button opens SignupModal (email + zip capture)
- "Want to do more? Volunteer" text link opens VolunteerModal
- Volunteer link has `cursor-pointer` and `hover:underline`

## Config

- `app/lib/config.ts` is the single source of truth for candidate info, nav, social links, donate URL, disclaimer
- All components pull from config — no hardcoded candidate details in components

## Accessibility

- Skip-to-content link in root layout targeting `#main`
- `aria-labelledby` on sections
- `aria-label` on all interactive elements
- `focus-visible:ring` on all interactive elements
- `motion-reduce:transition-none` throughout
- `sr-only` labels on form inputs
- `autoComplete` attributes on form fields (given-name, family-name, email, postal-code)
- Focus trap in modals
- `role="dialog"`, `aria-modal` on modals
- `role="banner"` on header, `role="contentinfo"` on footer
- `role="status"` on form success messages
- `role="region"` with `aria-label` on cookie banner
- Touch-aware autofocus via `useIsTouchDevice` — prevents keyboard pop on mobile

## Fonts

- **Inter** — everything: body, headings, nav, buttons, wordmark
- **Libre Baskerville** — endorsement quotes only (loaded via `--font-serif` variable)
- The candidate's name always appears in Inter — no decorative fonts on the name

## Cookie Banner

- Thin floating bar, `bottom-4 left-4 right-4` with rounded corners
- Dismisses to localStorage — once closed, never returns
- IconButton close with `aria-label`
- Links to privacy policy

---

## TODO — Requires Content or Decisions

### Content Needed
- Hero b-roll video of District 2 (environmental, no candidate — streets, bridges, neighborhoods)
- About section headshot/portrait
- Donate section community photo (full-width with dark overlay)
- Endorser headshots (square format)
- About section copy (2-3 paragraphs, personal, not a resume)
- Issue positions (real copy to replace Latin placeholders — should read like briefings)
- Endorsement quotes (real quotes from real people)
- Signup section heading copy (current is placeholder)

### Configuration Needed
- ActBlue donation URL → update `config.ts` donateUrl
- Social media URLs (Instagram, Twitter/X, Facebook) → update `config.ts`
- Campaign committee legal name → confirm disclaimer text
- Domain → update `config.ts` meta.url

### Technical Wiring
- SignupModal form → connect to Resend API route
- VolunteerModal form → connect to Resend API route
- QR code with UTM parameters for cards (utm_source=card&utm_medium=qr&utm_campaign=canvass)
- OG image → design and add to `/public` + metadata
- Favicon → verify SVG renders correctly across browsers
- Google Analytics / Vercel Analytics → set up for UTM tracking

### Future
- **Spanish translations** — professional translation of finalized English content into `es.ts`
- **[locale] route segment** — activate when Spanish is ready
- **Issue pages** — standalone pages expanding each issue from the landing page
- **Blog/writing section** — explainer posts (how county government works, campaign finance, etc.)
- **About the Campaign page** — zero-waste philosophy, intern program, lean budget approach
- **Events page** — add when campaign is running regular public events
- **Mobile testing** — verify all sections, modals, header behavior on actual devices