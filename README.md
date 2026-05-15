# [Name] for Portland — Campaign Website

County commissioner campaign site. Next.js 15, TypeScript, Tailwind CSS v4.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

All candidate info lives in `app/lib/config.ts`. Update once, flows everywhere.

## Media

- Drop hero video as `public/hero.mp4` and uncomment in `app/page.tsx`
- Drop hero image as `public/hero.jpg`
- Drop candidate photo in `public/` and update `About.tsx`

## Deploy

Connected to Vercel. Push to `main` to deploy.

## Structure

```
app/
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Hero, About, Issues, Endorsements, Donate, Volunteer
│   └── ui/           # Button, Section (reusable primitives)
├── lib/
│   └── config.ts     # All candidate/site config
├── privacy/          # Privacy policy page
├── globals.css       # Design tokens & base styles
├── layout.tsx        # Root layout, fonts, metadata
└── page.tsx          # Landing page (assembles sections)
```
