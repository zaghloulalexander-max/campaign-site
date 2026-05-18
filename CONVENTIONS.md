# Conventions

## Architecture

- **Next.js 15 App Router** with route groups
- `(campaign)/` group wraps all pages with shared Header, Footer, CookieBanner, and ModalStackProvider via `layout.tsx`
- Privacy page lives inside the campaign group at `(campaign)/privacy/`
- Issue pages live at `(campaign)/issues/[slug]/` using ArticlePage layout
- Educational pages (county-commissioner) use the same ArticlePage layout
- Root `layout.tsx` handles fonts, metadata, skip-to-content link, favicon, `<html>/<body>` only
- `app/not-found.tsx` handles 404s globally
- `app/error.tsx` provides branded error boundary with retry
- `app/loading.tsx` provides spinner during client-side page transitions

## Routing & Navigation

- **Internal links use `next/link`** — never plain `<a>` tags for internal routes
- External links (ActBlue, social media, mailto) use plain `<a>` tags
- Hash-only links (`#about`, `#issues`, etc.) use plain `<a>` tags — `next/link` doesn't add value for same-page anchors
- `Button` component auto-detects internal vs external hrefs when `as="a"` — renders `Link` for paths starting with `/`, plain `<a>` otherwise
- Header nav links are hash anchors (landing page only) — stay as `<a>` tags
- Footer links to issue pages, privacy, and home use `Link`

## Images

- **Article/issue page hero images use `next/image`** with optimized dimensions, `sizes` attribute, and `priority` flag
- Container has `bg-surface-muted` background as loading fallback
- Hero and Donate section background images use CSS `backgroundImage` (cannot use `next/image`)
- SVGs (favicon, district map) use plain `<img>` — `next/image` doesn't optimize SVGs
- Next config has AVIF and WebP formats enabled

## Icons

- All SVG icons live in `components/ui/icons/` as individual components
- `IconBase` provides shared SVG wrapper (24×24 viewBox, stroke-based, currentColor, aria-hidden)
- Icons include `shrink-0` to prevent compression in flex containers
- `SpinnerIcon` is standalone (fill-based, animated) — does not extend IconBase
- `index.ts` barrel exports all icons and types
- `IconButton` uses a registry pattern with type guard for named icons
- No inline SVGs in components except Footer social brand icons (data-driven fill paths)

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
- `components/ui/icons/` — SVG icon components (IconBase, ArrowIcon, ChevronIcon, CloseIcon, MenuIcon, SpinnerIcon) with barrel export.
- `components/layout/` — Structural (Header, Footer, ArticlePage, ReadMore). Config-driven via `lib/config.ts`, i18n via dict props.
- `components/sections/` — Page-level blocks (Hero, About, Issues, EndorsementShowcase, EndorsementCard, Donate, Signup, SignupModal, VolunteerModal). Each is self-contained.
- `contexts/` — ModalStackContext for modal z-index management and scroll locking.
- `hooks/` — useAutoAdvance (endorsement carousel), useMediaQuery / useIsTouchDevice (input autofocus).

### Server vs Client Components
- Pages are server components — no `'use client'` directive
- Interactive components are client components: Header, Modal, CookieBanner, EndorsementShowcase, Signup, SignupModal, VolunteerModal, ProgressTabs, Input
- Static sections are server components: Hero, About, Issues, Donate, EndorsementCard, ArticlePage, ReadMore, Footer
- This split minimizes client JavaScript — static content ships zero JS

## Design Tokens

- Defined as CSS custom properties in `globals.css` via `@theme inline`
- Palette: warm charcoal primary, warm ivory surfaces, monochrome buttons (no accent color)
- Typography: Inter (body, headings, UI), Libre Baskerville (endorsement quotes only)
- Border radius: `--radius-sm` (2px), `--radius-md` (4px), `--radius-lg` (6px), `--radius-xl` (8px)
- Spacing: generous — white space is a feature

## Button

- Polymorphic: renders as `<button>`, `<a>`, or `<Link>` via `as` prop
- When `as="a"`: auto-detects internal hrefs (starting with `/`) and renders `next/link`, external hrefs render plain `<a>`
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

## Issue Pages — Writing Conventions

### Voice
First person, insider. The narrator is someone who has worked inside the system and is explaining it to a smart neighbor who doesn't know how county government works. Not academic, not campaign-speak, not policy memo. Direct, specific, plainspoken.

### Authority
Authority comes from specificity. Name the department. Name the program. Use the real number. Every claim should make the reader think "this person has actually seen the spreadsheet."

### Structure
Each issue follows the same arc:

1. **What the county actually runs** — the specific departments, budget, and systems the commissioner has authority over
2. **How the money flows** — where it goes, who delivers services, the chain from budget line to person served
3. **Where it breaks down** — the specific failures, gaps, and inefficiencies an insider has seen
4. **What would change it** — concrete, operational proposals grounded in experience — not promises, mechanisms
5. **How you'd know it's working** — the accountability close: measurable outcomes, what gets tracked, what contracts should require

Sections don't need headers that match those words exactly, but the reader should move through that progression naturally.

### First Person
Personal experience isn't separated from the analysis — it's woven in as the basis for knowing what works and what doesn't. "I ran this program" is evidence, not autobiography. The whole piece is told from inside. Every section should have at least one moment where the reader thinks "this person was in the room."

### Proposals
Every proposal needs a mechanism. Not "I support affordable housing" but "master lease agreements give landlords guaranteed rent and tenants stability — the county should be funding 500 of them." The reader should be able to picture how it would actually work.

### Accountability
Every page closes with accountability. What gets measured, what contracts should require, how the public would know if it's working. This is the framework's throughline — it should feel inevitable by the end of each piece, not tacked on.

### Tone
Confident without being self-promotional. Critical without being cynical. He's not running against the county — he's someone who knows it well enough to fix what's broken.

### Length
800–1200 words per issue. Enough to demonstrate depth, short enough to read on a phone from a QR code scan.

### What These Pages Are Not
Platform documents, listicles of positions, policy white papers, or personal essays. They're briefings from someone who's been inside the system, written for voters who want to understand what's actually happening with their money.

### Issue Topics
Three core issues, each written through the accountability framework:

- **Homelessness** — the $310M Homeless Services Department, shelter-to-housing pipeline, landlord partnerships, prevention vs. response
- **Behavioral health** — the Health Department's $531M budget, crisis response, fentanyl/Measure 110 fallout, the Behavioral Health Resource Center, the gap between need and capacity
- **Public safety** — Sheriff's Office, jails, DA, Department of Community Justice, crisis deflection, reentry and stabilization

Cost of living is not a separate issue — it's the context that runs through all three. The framework pillars (accountability, effective services, fiscal transparency) connect them.

---

## Illustrations

### Style
All page illustrations use the same hand-drawn ink style: loose, gestural black ink strokes on a muted colored background. Simplified and slightly playful, not architecturally precise. Subjects should be recognizable but stylized, with organic flowing linework suggesting forms rather than depicting every detail. No text, no people, no faces. Aspect ratio 2:1 horizontal to match the `ArticlePage` hero image slot.

Always include photo references of the actual subject alongside the style prompt. Without references, the model will generate generic buildings or scenes that don't look like real places.

### Color system
Each page gets a distinct muted background color. All colors should sit comfortably against the site's warm ivory (`#fffef9`) and charcoal palette.

- **County commissioner**: muted lavender-gray (current)
- **Homelessness**: warm teal
- **Behavioral health**: warm amber / muted gold
- **Public safety**: warm slate / muted steel blue

### Base prompt template
"A loose, hand-drawn ink illustration of [SUBJECT AND LOCATION]. Render it in an abstract, sketchy style with organic flowing black ink lines on a [COLOR] background. Simplified and slightly playful, not architecturally precise. [SUBJECT] should be recognizable but stylized, with loose gestural strokes suggesting [DETAILS] rather than depicting every detail. No text, no people. Aspect ratio 2:1, horizontal."

### County commissioner prompt (reference)
"A loose, hand-drawn ink illustration of the Multnomah County Building at 501 SE Hawthorne Boulevard in Portland, Oregon. The building is a mid-century modernist government building, rectangular with a grid of windows and a flat roof. Render it in an abstract, sketchy style with organic flowing black ink lines on a muted lavender-gray background. Simplified and slightly playful, not architecturally precise. The building should be recognizable but stylized, with loose gestural strokes suggesting the facade rather than depicting every detail. No text, no people. Aspect ratio 2:1, horizontal."

### Homelessness prompt
"A loose, hand-drawn ink illustration of two modest Portland, Oregon homes viewed from the sidewalk. A Tudor-style cottage with a steep gable roof and brick chimney on the left, a smaller gabled house partially hidden by trees on the right. Mature street trees in the foreground, power lines overhead. Render it in an abstract, sketchy style with organic flowing black ink lines on a warm teal background. Simplified and slightly playful, not architecturally precise. The homes should be recognizable but stylized, with loose gestural strokes suggesting the forms rather than depicting every detail. No text, no people. Aspect ratio 2:1, horizontal."

Reference images: photo of the actual houses (Hollywood neighborhood, NE Portland) + the county commissioner illustration for style consistency. No subject reference needed for generic residential scenes, but always include the commissioner illustration as a style reference.

Note: the current teal is slightly cool and saturated against the site's warm ivory palette. A future regeneration should use a warmer, more muted teal. The aspect ratio also runs slightly taller than 2:1, so `next/image` crops the top and bottom. Regenerate at true 2:1 for the final version.

### Behavioral health and public safety prompts (TBD)
Subjects for these two illustrations have not been decided. They should be recognizable District 2 or Multnomah County locations relevant to each topic, not abstract concepts. The commissioner page works because it illustrates a real, specific building. The issue pages should follow the same approach.

---

## TODO — Requires Content or Decisions

### Content Needed
- Hero b-roll video of District 2 (3-4 clips, 3-4 seconds each, landscape, 4K source, export 1080p for web)
- Hero poster image (frame grab from best clip)
- Donate section street sign photo (MLK & Fremont or similar District 2 intersection, landscape, shot from below)
- About section headshot/portrait
- Endorser headshots (square format)
- About section copy (2-3 paragraphs, personal, not a resume)
- Issue page content (replace placeholder copy — homelessness, behavioral health, public safety)
- Issue page illustrations (ink style matching county-commissioner illustration)
- Endorsement quotes (real quotes from real people)
- Signup section heading copy (current is placeholder)
- Framework lead-in copy (left column of Issues section — Nabil should write)

### Configuration Needed
- ActBlue donation URL → update `config.ts` donateUrl
- Social media URLs (Instagram, Twitter/X, Facebook) → update `config.ts`
- Campaign committee legal name → confirm disclaimer text
- Domain → update `config.ts` meta.url

### Technical — Do Now
- [x] ~~Dynamic import modals (SignupModal, VolunteerModal) to defer framer-motion bundle~~
- [x] ~~Throttle Header scroll listener with requestAnimationFrame~~
- [x] ~~Add preconnect hint for ActBlue domain~~
- [x] ~~Migrate all internal links to `next/link`~~
- [x] ~~Add `next/image` to ArticlePage hero with optimized dimensions and loading fallback~~
- [x] ~~Add `app/error.tsx` error boundary~~
- [x] ~~Add `app/loading.tsx` loading state~~
- [x] ~~Button component auto-detect internal vs external hrefs~~
- [ ] Fix endorsement carousel mobile responsiveness — absolute positioning clips stacked content on small screens
- [ ] Redesign mobile menu — current inline dropdown needs to be replaced (reference Fayra Drawer pattern)
- [ ] Simplify county commissioner S3 ("What the county is responsible for") — discussed but not finalized

### Technical — Before Launch
- [ ] Add `app/sitemap.ts` covering all pages
- [ ] Add `app/robots.ts`
- [ ] Add OG image to root metadata and per-page metadata
- [ ] Add `favicon.ico` fallback
- [ ] Create or source `/district-map.svg` (referenced in Hero.tsx fallback)
- [ ] Implement analytics (provider TBD)
- [ ] SignupModal form → connect to Resend API route
- [ ] VolunteerModal form → connect to Resend API route
- [ ] QR code with UTM parameters for palm cards
- [ ] Refactor campaign layout dict when `[locale]` route segment is added
- [ ] Darken donate section overlay (currently 70%, needs ~80-85%) once real photo is in place

### Future
- **Spanish translations** — professional translation of finalized English content into `es.ts`
- **[locale] route segment** — activate when Spanish is ready
- **Blog/writing section** — explainer posts
- **About the Campaign page** — zero-waste philosophy, intern program, lean budget approach
- **Events page** — add when campaign is running regular public events
- **Standalone volunteer/internship pages** — when content and forms are ready
- **Mobile testing** — verify all sections, modals, header behavior on actual devices