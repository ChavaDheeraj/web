# Trigarty website

Marketing site for Trigarty, built with Next.js 15 (App Router) and Tailwind CSS v4. Pages are prerendered; the only client-side code is the header menu, the "who we work with" explorer, the copyright year and the contact form.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also type-checks and lints)
npm start          # serve the production build
```

On Windows, `start.bat` installs dependencies and starts the dev server.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production URL without a trailing slash. Drives canonicals, sitemap, robots, Open Graph and JSON-LD. Defaults to `https://trigarty.com`. |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Access key for the contact form ([web3forms.com](https://web3forms.com)). Without it the form shows its error state and points people to email and phone. |

## Where things live

- `src/lib/site.ts`: contact details, navigation, stages. Change facts here, not in pages. Add social profile URLs to `SITE.social` and they appear in the footer and in the JSON-LD `sameAs`.
- `src/content/site-content.ts`: shared copy (capabilities, stages, segments, steps, ventures).
- `src/components/blocks.tsx`: page hero, section header, CTA band, flow diagrams.
- `src/app/globals.css`: colour tokens, type scale, buttons, form fields.
- `scripts/generate-icons.mjs`: rebuilds the favicon set from the logo mark (`npm run icons`).
- `brand/`: original logo files (not shipped).

## Hosting

Use a host that runs Next.js (Vercel, or `next start` on a Node server) so redirects (`/engage`, `/log/*`), security headers and the 404 page work as configured in `next.config.mjs` and `src/app/not-found.tsx`.
