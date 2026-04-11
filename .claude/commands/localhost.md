---
description: Launch the Astro site dev server on localhost
---

Start the Astro dev server in the background so the user can view the site at http://localhost:4321/.

Steps:
1. Run `npm run dev` from `astro-site/` using the Bash tool with `run_in_background: true`.
2. Read the background task output once to confirm the server bound to http://localhost:4321/ (look for the "astro" ready line).
3. Report the local URL to the user. If port 4321 is taken, mention the actual port Astro chose.

Notes:
- Do not block waiting on the server — it runs until the user stops it.
- Ignore transient vite EBUSY warnings on Windows; they're harmless on first start.
