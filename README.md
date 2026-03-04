# Parachute Law Content Engine

CLI tool that automates the "Scout & Scribe" workflow for [ParachuteLaw.co.uk](https://parachutelaw.co.uk). Uses Gemini for UK legal research and Claude for empathetic blog content.

## Setup

```bash
git clone <repo-url> && cd parachutelaw-blog
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env       # then add your API keys
```

## Usage

```bash
python main.py --topic "Pension Sharing"
```

Output is saved to `output/YYYY-MM-DD-topic-slug.md`.

## How It Works

1. **Scout** (Gemini) — researches 2026 UK legal data using `prompts/research_dna.md`
2. **Scribe** (Claude) — writes a ~1,200-word article using `prompts/brand_voice.md`
3. **Critic** (Gemini) — audits the draft for hallucinated laws or stats
4. **Save** — final article saved to `output/`

## Project Structure

```
main.py              Entry point (--topic argument)
agents/
  researcher.py      Scout — Gemini research
  writer.py          Scribe — Claude writing
  auditor.py         Critic — Gemini audit
prompts/
  research_dna.md    System instructions for legal research
  brand_voice.md     Parachute Law tone & conversion guide
output/              Generated articles
```
