# Parachute Law Content Engine

CLI tool that automates the "Scout & Scribe" workflow for [ParachuteLaw.co.uk](https://parachutelaw.co.uk). Uses Gemini for UK legal research and Claude for empathetic blog content generation.

## Setup

```bash
git clone https://github.com/paulabes/parachutelaw-blog.git
cd parachutelaw-blog
pip install -r requirements.txt
cp .env.example .env   # then add your API keys
```

You need two API keys in `.env`:
- `GEMINI_API_KEY` — from [Google AI Studio](https://aistudio.google.com/apikey)
- `ANTHROPIC_API_KEY` — from [Anthropic Console](https://console.anthropic.com/settings/keys)

## Generate a Blog Post

```bash
python main.py --topic "Pension Sharing"
```

Output is saved to `output/YYYY-MM-DD-topic-slug.md`.

## How It Works

1. **Scout** (Gemini) — researches 2026 UK legal data using `prompts/research_dna.md`
2. **Scribe** (Claude) — writes a ~1,200-word article using `prompts/brand_voice.md`
3. **Critic** (Gemini) — audits the draft for hallucinated laws or stats
4. **Save** — final article saved to `output/`

## Demo Website

A Flask-powered preview site with a premium dark theme, adapted for the Parachute Law brand.

```bash
python site/app.py
```

Open [http://localhost:5000](http://localhost:5000) to view:

| Page | URL | Description |
|---|---|---|
| Home | `/` | Landing page with services, testimonials, booking form |
| Contact | `/contact` | Contact form, office details, Google Maps |
| News | `/news` | Blog listing — auto-discovers posts from `output/` |
| Article | `/news/<slug>` | Full rendered blog post |

Generate articles with the content engine and they appear on `/news` automatically.

## Project Structure

```
main.py                Entry point (--topic argument)
agents/
  researcher.py        Scout — Gemini research
  writer.py            Scribe — Claude writing
  auditor.py           Critic — Gemini audit
prompts/
  research_dna.md      System instructions for legal research
  brand_voice.md       Parachute Law tone & conversion guide
site/
  app.py               Flask demo website
  templates/           Jinja2 templates (base, home, contact, news, post)
output/                Generated articles (.md)
```
