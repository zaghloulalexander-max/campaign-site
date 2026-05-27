# Conventions

## Architecture

- **Next.js 15 App Router** with route groups
- `(campaign)/` group wraps all pages with shared Header, Footer, CookieBanner, and ModalStackProvider via `layout.tsx`
- Privacy page lives inside the campaign group at `(campaign)/privacy/`
- Issue pages live at `(campaign)/issues/[slug]/` using ArticlePage layout
- Educational pages (county-commissioner) use the same ArticlePage layout
- Root `layout.tsx` handles fonts, metadata, skip-to-content link, favicon, `<html>/<body>` only. `metadataBase` set to `https://electnabil.com`. `themeColor` is in a separate `viewport` export (Next.js 15 requirement). Twitter card configured as `summary_large_image`. Preconnect to `donation.c-esystems.com`.
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

- `components/ui/` — Reusable primitives (Button, Card, Drawer, Section, Modal, Input, IconButton, ProgressTabs, CookieBanner, Tooltip). No business logic.
- `components/ui/icons/` — SVG icon components (IconBase, ArrowIcon, ChevronIcon, CloseIcon, MenuIcon, SpinnerIcon) with barrel export.
- `components/layout/` — Structural (Header, Footer, ArticlePage, ReadMore). Config-driven via `lib/config.ts`, i18n via dict props.
- `components/sections/` — Page-level blocks (Hero, About, Issues, EndorsementShowcase, EndorsementCard, Donate, Signup, SignupModal, VolunteerModal). Each is self-contained.
- `contexts/` — ModalStackContext for modal z-index management and scroll locking.
- `hooks/` — useAutoAdvance (endorsement carousel), useMediaQuery / useIsTouchDevice (input autofocus).

### Server vs Client Components
- Pages are server components — no `'use client'` directive
- Interactive components are client components: Header, Drawer, Modal, CookieBanner, EndorsementShowcase, Signup, SignupModal, VolunteerModal, ProgressTabs, Input, Tooltip
- Static sections are server components: About, Issues, Donate, EndorsementCard, ArticlePage, ReadMore, Footer
- Hero is a client component (video autoplay management)
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
- Landing page: full nav, donate button, mobile drawer, dark/light section detection
- Sub-pages (privacy, etc.): wordmark only, no nav, no donate button, forced light mode
- Dark section detection via scroll direction-aware check — `DARK_SECTION_IDS` array
- Scrolling down: checks from bottom of header (changes when new section meets header)
- Scrolling up: checks from top of viewport (changes when section clears the top)
- Three background states: transparent (top of page), frosted dark (scrolled over dark section), frosted light (scrolled over light section)
- Scrollbar width compensation via `--scrollbar-width` CSS variable for modal scroll lock
- Donate button variant swaps: `secondary` (white) on dark, `primary` (charcoal) on light
- Mobile navigation uses Drawer component (slide-from-right, content-sized panel, not full height)
- Drawer contains: wordmark + close button header, three nav links, donate button
- `returnFocusRef` restores focus to hamburger button on close

## Drawer

- Generic, reusable slide-in panel component at `components/ui/Drawer.tsx`
- Portal-rendered to `document.body` — avoids z-index and overflow issues
- Slides from left or right (configurable via `side` prop)
- Backdrop: `bg-primary-800/60` with `backdrop-blur-sm`
- Focus trap: Tab cycles within drawer, Shift+Tab wraps
- Scroll lock: self-contained, defers if Modal already locked scroll (checks `document.body.style.overflow`)
- ESC to close, click backdrop to close
- `inert` attribute on panel when closed (screen readers and tab ignore it)
- `fullHeight` prop: `true` (default) stretches to viewport, `false` sizes to content
- CSS transitions with `motion-reduce:transition-none` — no framer-motion dependency
- SSR-safe: uses `mounted` state (not `typeof window`) to avoid hydration mismatch
- `initialFocusRef` and `returnFocusRef` for focus management

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

Accountability is framed as something that supports workers and earns programs more investment, not as a mechanism for cutting. "Funding tied to outcomes protects frontline staff" not "programs that fail get defunded." Each page arrives at this from its own context — no template language across pages. When funding moving away from something is mentioned, say where it's going and who benefits.

### Tone
Confident without being self-promotional. Critical without being cynical. He's not running against the county — he's someone who knows it well enough to fix what's broken.

### Issues Section Lead-In
The lead-in body on the landing page sets the tone for all three issues: "I believe in supporting and empowering the people and programs that serve this county to get the most out of every taxpayer dollar." This frames accountability as empowerment, not oversight. Both voters and union members read it before clicking into any issue page.

### Persuasion Principles
The issue pages should persuade without arguing. The reader should arrive at the conclusion that Nabil is the right person — not because he told them so, but because the evidence made it obvious.

- **Appeal to self-interest, not ideals.** The voter's version: your taxes are paying for programs that aren't being measured, you deserve to know if they're working. The union's version: when outcomes are tracked, it proves what your work produces, which is how your program gets funded and staffed. Both audiences support Nabil because it serves them, not because he asked.
- **Lead with heart, close with mind.** Stories and human moments first (the single mother, the father on minimum wage, the Bienestar kids), systems and numbers second, accountability as the natural conclusion. The emotional material earns the reader's attention; the analytical material earns their trust.
- **Let the reader arrive at the conclusion.** Show the 90% retention rate next to programs that only track throughput. Don't tell the reader what to think about it. The understated approach trusts the voter to connect the dots, and that respect is itself persuasive.
- **Do the opposite of what's expected.** First-person voice instead of third-person campaign-speak. Briefing-style issue pages instead of platform promises. A lean campaign that doesn't waste money on mailers. The unexpectedness builds trust.
- **No em dashes.** Use commas or restructure the sentence.

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

### Homelessness page structure (edited)
1. Opening — $310M tension, housing-specific credential (two decades), staff-on-the-ground promise
2. **What the county is responsible for** — HSD, nonprofits on contract, DCHS five programs, funding sources under pressure
3. Bridge data paragraph — 75% increase, 10,500 people, vacancy rates, 600 beds cut. Styled as `border-l-2 border-[#aa7355] pl-6 text-text-subtle text-[15px] italic my-16`. Sits between sections as context, not narrative.
4. **What I've seen** — shelter volunteering, rehousing (75 families/$900K), working families, two stories (father/single mother), one-time rent check insight, EJRP data (90% retention, $7.5M to $0), waitlist/demand crisis closes the section
5. **Opportunities** — accountability with union close (throughput critique folded in), master lease (SHA), prevention as frontline strategy, commissioner lever closes

### Bridge data pattern
When a section needs statistical context that doesn't belong in either the preceding or following narrative section, use a bridge paragraph with the illustration's accent color as a left border: `border-l-2 border-[accent] pl-6 text-text-subtle text-[15px] italic my-16`. Each issue page uses its own accent color from the illustration.

### Section naming
"What can be improved" was renamed to "Opportunities." "How progress gets measured" was absorbed into Opportunities. Forward-looking section names avoid implying the current system is a failure.

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

Note: the teal was shifted warmer via Gemini regeneration and now includes a terracotta door accent (`#aa7355`) on the Tudor cottage, matching the warm accent pattern used across all illustrations (behavioral health has a red roofline). The illustration was also regenerated with bolder, more confident strokes to match the behavioral health quality. Watermark removed via PIL.

### Behavioral health and public safety prompts (TBD)
Subjects for these two illustrations have not been decided. They should be recognizable District 2 or Multnomah County locations relevant to each topic, not abstract concepts. The commissioner page works because it illustrates a real, specific building. The issue pages should follow the same approach.

### Behavioral health prompt
"A loose, hand-drawn ink illustration of a wooden park bench on a concrete pad, facing away from the viewer, with tall mature trees rising behind it and a house roofline visible through the canopy. Render it in an abstract, sketchy style with organic flowing black ink lines on a warm muted amber background (similar to a dusty gold or aged wheat tone, not bright orange or yellow). Simplified and slightly playful, not architecturally precise. The bench and trees should be recognizable but stylized, with loose gestural strokes suggesting the forms rather than depicting every detail. No text, no people. Aspect ratio 2:1, horizontal."

Reference images: photo of a park bench at Wilshire Park (Beaumont-Wilshire, NE Portland) + the county commissioner illustration for style consistency. Caption: "Beaumont-Wilshire, Northeast Portland"

Subject rationale: a park bench suggests a quiet, human-scale moment of rest and reflection without depicting clinical settings, substance use, or crisis. The park setting connects to the neighborhood and the community rather than to the system.

### Public safety prompt
"A loose, hand-drawn ink illustration of a 15 MPH neighborhood greenway sign on a residential Portland street, with a quiet road on the left, a sidewalk on the right, and mature trees overhead. A basketball hoop is visible in the background. Render it in an abstract, sketchy style with organic flowing black ink lines on a warm muted slate background (a soft gray with a slight warm brown undertone, like weathered driftwood, not purple or blue). The sign should show 15 MPH and figures of children, rendered in the same black ink style as the rest of the illustration. No color fill on the sign, no people elsewhere in the scene. Simplified and slightly playful, not architecturally precise. The sign and street should be recognizable but stylized, with loose gestural strokes suggesting the forms rather than depicting every detail. Aspect ratio 2:1, horizontal."

Reference images: photo of a PBOT Neighborhood Greenway sign on a residential street in the Concordia neighborhood + the county commissioner illustration for style consistency. Caption: "Concordia, Northeast Portland"

Subject rationale: a "slow down, kids at play" sign communicates public safety as a feeling of community care and attention without depicting police, courts, or the justice system. The basketball hoop adds a neighborhood detail. The sign is a real PBOT fixture that Portland residents recognize.

### Watermark removal
Gemini-generated illustrations include a small star watermark in the bottom-right corner. Remove it using PIL by sampling the background color from a nearby clean area and painting a rectangle over the watermark region. The background colors are not perfectly uniform, so sample from the same edge (right edge, well above the corner) to match the local tone.

### Behavioral health vs. mental health (content note)
The behavioral health page opens by distinguishing behavioral health from mental health. Behavioral health focuses on habits and behavior patterns with the goal of correcting them. Mental health involves deeper cognitive and clinical work. Both fall under the same county division but carry separate licensing and funding. This distinction came from Nabil's interview and should be preserved in any editing pass.

## Mobile Responsiveness

- Target devices: small iPhone (375px), large iPhone (430px), iPad portrait (768px), iPad landscape / small laptop (1024px), large laptop (1280px+), monitor (1440px+)
- About section uses float-wrap layout: image floats left at `md:w-[55%]` with text wrapping around it. On mobile, image stacks full-width above text. `aspect-[4/3]` across all breakpoints.
- Endorsement images: full-width `aspect-[4/3]` when stacked, `aspect-square` at `max-w-[420px]` when side-by-side at `lg`
- Endorsement showcase min-heights: `750px` (phone), `950px` (tablet), fixed `600px` at `lg`
- Endorsement quote text: `text-xl` (phone), `text-2xl` (tablet), `text-3xl` (desktop)
- ArticlePage top padding: `pt-32` on mobile (was `pt-48`), `pt-64` on desktop
- Modal wrapper padding: `p-4` mobile, `p-6` desktop (corrected from inverted values)
- Donate copy button: `p-2 -m-2` for larger mobile tap target
- Phone number and config values pulled from `siteConfig.meta` — not hardcoded in components
- `--content-max: 72rem` (1152px) caps content width; beyond that, side margins increase

---

## TODO — Requires Content or Decisions

### Content Needed
- [x] ~~Hero b-roll video~~ — Hawthorne Blvd 4K drone footage from Videezy, attribution in privacy policy
- [x] ~~Donate section photo~~ — Ainsworth St tree-lined residential street, District 2
- [x] ~~About section headshot/portrait~~ — Image 5 (IMG_0572), seated at round table with community mural, 4:3 crop removes rainbow, float-wrap layout
- [x] ~~Endorser headshots~~ — Tom Potter, Nafisa Fai, and Ernesto Fonseca added
- [x] ~~About section copy~~ — 3 paragraphs: career arc (broad strokes), what he built (EJRP + Bienestar), why he's running (staff on the ground + get more out of resources)
- [x] ~~Issue page content~~ — homelessness fully edited, behavioral health and public safety drafted from interviews
- [x] ~~Issue page illustrations~~ — homelessness (Tudor houses, warm teal, terracotta door accent), behavioral health (park bench, warm amber, red roofline accent), public safety (15 MPH sign, warm slate)
- [x] ~~Endorsement quotes~~ — Potter confirmed, Fai written, Fonseca confirmed
- [x] ~~Signup section heading copy~~ — "Campaigns send mailers..." / "We'd rather just email you."
- [x] ~~Framework lead-in copy~~ — leadIn removed, leadInBody only at `text-xl md:text-2xl`

### Configuration Needed
- [x] ~~Donation URL~~ → C&E Systems: https://donation.c-esystems.com/campaign/electnabil
- [ ] Social media URLs (Instagram, Twitter/X, Facebook) → update `config.ts` when/if active profiles exist
- [x] ~~Campaign committee legal name~~ → "Paid for by Elect Nabil. Not authorized by any candidate or candidate committee."
- [x] ~~Domain~~ → electnabil.com
- [x] ~~Email~~ → info@electnabil.com

### Technical — Do Now
- [x] ~~Dynamic import modals (SignupModal, VolunteerModal) to defer framer-motion bundle~~
- [x] ~~Throttle Header scroll listener with requestAnimationFrame~~
- [x] ~~Add preconnect hint for donation domain~~ — updated to donation.c-esystems.com
- [x] ~~Migrate all internal links to `next/link`~~
- [x] ~~Add `next/image` to ArticlePage hero with optimized dimensions and loading fallback~~
- [x] ~~Add `app/error.tsx` error boundary~~
- [x] ~~Add `app/loading.tsx` loading state~~
- [x] ~~Button component auto-detect internal vs external hrefs~~
- [x] ~~Fix endorsement carousel mobile responsiveness~~ — min-height adjusted, items-start on mobile
- [x] ~~Redesign mobile menu~~ — Drawer component (slide-from-right, backdrop blur, focus trap, scroll lock, content-sized panel) replaces inline dropdown
- [ ] Simplify county commissioner S3 ("What the county is responsible for") — discussed but not finalized

### Technical — Before Launch
- [x] ~~Add `app/sitemap.ts` covering all pages~~
- [x] ~~Add `app/robots.ts`~~
- [x] ~~Add OG image to root metadata~~ — 1200×630, Inter font, warm ivory background
- [x] ~~Add `favicon.ico` fallback~~ — multi-size ICO (16/32/48px) in public/
- [x] ~~Create or source `/district-map.svg`~~ — removed reference from Hero.tsx, not needed
- [x] ~~Implement analytics~~ — @vercel/analytics installed, `<Analytics />` in root layout
- [ ] SignupModal form → connect to Resend API route (pending Google Workspace setup)
- [ ] VolunteerModal form → connect to Resend API route (pending Google Workspace setup)
- [ ] QR code with UTM parameters for palm cards
- [ ] Refactor campaign layout dict when `[locale]` route segment is added
- [x] ~~Darken donate section overlay~~ — set to 80%
- [ ] Alex's full editing/messaging pass on behavioral health and public safety issue pages

### Future
- **Spanish translations** — professional translation of finalized English content into `es.ts`
- **[locale] route segment** — activate when Spanish is ready
- **Blog/writing section** — explainer posts
- **About the Campaign page** — zero-waste philosophy, intern program, lean budget approach
- **Events page** — add when campaign is running regular public events
- **Standalone volunteer/internship pages** — when content and forms are ready
- **Mobile testing** — verify endorsement min-heights on actual devices, especially with Ernesto's long quote