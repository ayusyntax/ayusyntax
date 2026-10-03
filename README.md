# Ayusyntax website

Marketing and informational site for [Ayusyntax](https://ayusyntax.org)—a U.S. 501(c)(3) health-technology nonprofit bridging clinic and hospital networks in India. This repository is **not** the hospital product (routing, intake, or ABDM apps).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

Local dev uses the site root (`/`). GitHub Pages project sites are served under `/REPO_NAME/`.

```bash
# Preview the same paths as production on GitHub Pages (replace user/repo if needed)
NEXT_PUBLIC_BASE_PATH=/ayusyntax NEXT_PUBLIC_SITE_URL=https://YOUR_USER.github.io/ayusyntax npm run build
npx serve out
```

## GitHub Pages

1. In the repository on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main` (or run **Deploy GitHub Pages** manually under Actions).
3. The workflow [`.github/workflows/deploy-github-pages.yml`](.github/workflows/deploy-github-pages.yml) sets:
   - `NEXT_PUBLIC_BASE_PATH` to `/<repository-name>` so routes and assets resolve to `https://<user>.github.io/<repo>/...`
   - `NEXT_PUBLIC_SITE_URL` for correct metadata and absolute URLs

Internal links use `next/link` with root-relative paths (`/mission`, etc.); Next.js applies `basePath` automatically in production builds.

If the repository is renamed, no config change is required—the workflow derives the path from `github.event.repository.name`.

## Project structure

| Path | Purpose |
|------|---------|
| `src/content/` | Copy and structured content—edit here first |
| `src/components/ui/` | Buttons, cards, badges, layout primitives |
| `src/components/sections/` | Reusable page sections (hero, phases, compliance) |
| `src/components/layout/` | Header, footer, page shell |
| `src/styles/theme.css` | Design tokens (colors, radii) |
| `public/brand/` | Official logo (`ayusyntax-logo.png`) |

## Adding a page

1. Add or update content in `src/content/`.
2. Create `src/app/your-route/page.tsx` using `PageShell` and existing sections.
3. Add a link in `src/lib/constants.ts` (`navLinks`) if it should appear in the header.
4. If you need a new visual pattern, add a component under `src/components/ui/` or `sections/`—avoid one-off colors in page files.

## Brand

- Logo source: `Ayusyntaxlogo1.png` (copied to `public/brand/ayusyntax-logo.png`).
- Primary green matches the “Ayu” portion of the wordmark (`--color-brand-green` in `theme.css`).
- Use the logo on light surfaces or the built-in light chip in the header.

## Routes

- `/` — Home
- `/mission` — Mission and governance overview
- `/how-it-works` — Two-phase model
- `/trust` — Compliance and security principles
- `/contact` — Partner inquiry (mailto form)
- `/styleguide` — Contributor design reference
