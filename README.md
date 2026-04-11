# Authentic Communicator Global

Marketing site for [authenticcommunicatorglobal.com](https://www.authenticcommunicatorglobal.com) — Alice Deville's voice and communication coaching business.

Astro static site, deployed to Vercel, with a Resend-backed contact form.

## Stack

- **Astro 6** with Tailwind 4
- **Vercel** hosting via `@astrojs/vercel` adapter (static build + one serverless endpoint for the contact form)
- **Resend** for transactional email from the contact form
- **Iconify** (`iconify-icon` web component) for the Solar icon set

## Run locally

```bash
cd astro-site
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/
npm run preview
```

The `/localhost` slash command in `.claude/commands/localhost.md` starts the dev server from inside Claude Code.

## Deploy

Pushed to `main` → Vercel builds automatically.

**Project settings:**
- Root Directory: `astro-site`
- Framework preset: Astro (auto-detected)
- Environment variables (see below)

**Domains:** add both `authenticcommunicatorglobal.com` and `www.authenticcommunicatorglobal.com` in Vercel, mark www as primary.

## Environment variables

Set in Vercel → Project → Settings → Environment Variables:

| Key | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key for the contact form |
| `CONTACT_TO` | Address that receives form submissions (e.g. `alice@authenticcommunicatorglobal.com`) |
| `CONTACT_FROM` | Verified Resend sender (e.g. `Authentic Communicator <contact@authenticcommunicatorglobal.com>`) — or the sandbox `onboarding@resend.dev` while the domain isn't verified |

See `.env.example` for a local template.

## Pages

| URL | Page |
|---|---|
| `/` | Home |
| `/about` | About Alice |
| `/packages` | Packages overview |
| `/packages/confident-speaker` | Confident Speaker Package |
| `/packages/confident-pronunciation` | Confident Pronunciation Package |
| `/packages/intensive-session` | Intensive 90-Minute Session |
| `/inspiration` | Articles index |
| `/inspiration/[slug]` | Individual article |
| `/contact` | Contact form (Resend) |
| `/free-consultation` | Discovery call booking |
| `/privacy` · `/terms` | Legal |

## Design system

- Navy `#050615` chrome, gold `#C4A470` accents (site chrome only — section eyebrows, dividers, hover states)
- Cream `#F8F3EA` for alternating section backgrounds
- Per-package accent colours via `--pkg-accent` CSS variable: rust `#B5654A` (Speaker), sage `#6B8E85` (Pronunciation), plum `#7A4E5E` (Intensive)
- Zero border-radius site-wide (see `global.css`)
- Adjacent sections always use different background colours
