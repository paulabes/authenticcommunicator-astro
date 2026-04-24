# CLAUDE.md

Guidance for Claude Code working in this repo.

## What this is

Marketing site for **Authentic Communicator Global** (Alice Deville, voice and communication coach). Astro 6 + Tailwind 4, deployed to Vercel, with a Resend-backed contact form.

Alice trained as an opera singer at the Guildhall School of Music and Drama, has 10+ years of coaching experience, and has worked with executives from BlackRock, Deloitte, JP Morgan, and Google — and has coached at 10 Downing Street.

## Layout

```
.
├── .claude/commands/localhost.md   # /localhost slash command (starts dev server)
├── .env.example                    # Resend env vars template
├── astro-site/                     # the whole site
│   ├── astro.config.mjs            # Vercel adapter wired, site=www.authenticcommunicatorglobal.com
│   ├── package.json
│   ├── public/
│   │   ├── favicon.svg             # serif A (white) + C (gold) on navy
│   │   ├── logos/                  # client logo SVGs
│   │   ├── images/                 # Alice photos, package imagery
│   │   └── robots.txt
│   │   └── images/blog/           # per-post hero images for inspiration articles
│   └── src/
│       ├── components/
│       │   ├── Breadcrumbs.astro           # accessible breadcrumb nav + schema-ready label set
│       │   └── GoogleReview.astro          # dark navy testimonial band (random or fixed review)
│       ├── content/blog/                   # inspiration articles (markdown w/ YAML frontmatter)
│       ├── data/
│       │   ├── holdingPosts.ts             # placeholder posts shown only when content/blog is empty
│       │   ├── reviews.ts                  # canonical list of Google reviews
│       │   └── site.ts                     # business/NAP data + reusable JSON-LD schema builders
│       ├── layouts/Base.astro              # nav, footer, Pitch Audit section, meta/OG/JSON-LD, password gate
│       ├── pages/
│       │   ├── index.astro
│       │   ├── about.astro
│       │   ├── contact.astro               # form posts to /api/contact
│       │   ├── free-consultation.astro
│       │   ├── privacy.astro · terms.astro · 404.astro
│       │   ├── api/contact.ts              # Resend endpoint (prerender=false)
│       │   ├── inspiration/index.astro · [slug].astro   # parses YAML frontmatter, emits BlogPosting + Breadcrumb JSON-LD
│       │   └── packages/
│       │       ├── index.astro                       # listing
│       │       ├── confident-speaker.astro           # rust accent
│       │       ├── confident-pronunciation.astro     # sage accent
│       │       └── intensive-session.astro           # plum accent
│       └── styles/global.css
├── CLAUDE.md
└── README.md
```

## Running the site

```bash
cd astro-site
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/
npm run preview
```

The `/localhost` slash command does the same thing from inside Claude Code.

## Design system

- Palette: navy `#050615`, gold `#C4A470` (site chrome only), cream `#F8F3EA` (alternating section backgrounds)
- Per-package accents exposed via `--pkg-accent` CSS variable on each package card/page:
  - Confident Speaker — rust `#B5654A`
  - Confident Pronunciation — sage `#6B8E85`
  - Intensive 90-Minute Session — plum `#7A4E5E`
- Typography: Playfair Display (serif) + Inter (sans)
- Global rule: `border-radius: 0` on everything (set in `global.css`)
- Icons: Solar set via `iconify-icon`, always the `-bold` (solid) variant
- **Adjacent sections must always use different background colours** - enforced as a layout rule
- **No em-dashes anywhere in site-rendered copy.** Use hyphens (`-`) instead.

## Deploy

- Hosted on Vercel, Project Root Directory = `astro-site`
- Push to `main` triggers a deploy
- Production URL (preview period): `https://authenticcommunicator-astro.vercel.app`
- Planned primary: `https://www.authenticcommunicatorglobal.com` (DNS cut over when Alice signs off)

## Environment variables

Set in Vercel → Project → Settings → Environment Variables. See `.env.example`.

| Key | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key for `/api/contact` |
| `CONTACT_TO` | Address that receives form submissions |
| `CONTACT_FROM` | Verified Resend sender |

## Preview-period guards

During the client review period the site:
- Is marked `noindex, nofollow` via a `<meta>` tag in `Base.astro` and a `Disallow: /` in `robots.txt`
- Is gated by a simple client-side password (`alice2026wonderland`) held in `localStorage` - see `Base.astro`

Remove both when Alice signs off and DNS is cut over. `robots.txt` already references the sitemap so that line can stay; swap `Disallow: /` for `Allow: /` and flip the meta robots to `index, follow` at cutover.

## SEO / structured data

- Per-page title, description, canonical, Open Graph, Twitter card, and JSON-LD are all driven through `Base.astro` props (`title`, `description`, `image`, `canonical`, `type`, `publishedTime`, `jsonLd`).
- Reusable schema builders live in `src/data/site.ts`: `orgSchema` (ProfessionalService), `personSchema` (Alice), `websiteSchema`, `serviceSchema`, `breadcrumbSchema`.
- Blog posts auto-emit BlogPosting + BreadcrumbList schema from frontmatter in `inspiration/[slug].astro`.
- Sitemap is generated by `@astrojs/sitemap` with per-path priority/changefreq in `astro.config.mjs` serialize.

## Packages

1. **Confident Speaker Package** — mastering public speaking
2. **Confident Pronunciation Package** — confident UK English pronunciation
3. **Intensive 90-Minute Session** — one focused session for a specific upcoming event

## Maintenance

Whenever you make structural changes to the workspace, update this file.
