# PROJECT SPEC: Parachute Law Content Engine (2026)

## 1. Overview
A high-performance, daily-use CLI tool for ParachuteLaw.co.uk. It automates the "Scout & Scribe" workflow: using Gemini 3.1 for real-time UK legal research and Claude 4.6 for empathetic, 1,000-word blog content generation.

## 2. Technical Stack
- **Language:** Python 3.12+
- **APIs:**
  - `google-genai`: For Gemini-3.1-flash-lite (Research/Audit)
  - `anthropic`: For Claude-3-7-sonnet-20250219 (Writing)
- **Architecture:** Modular Agentic (Agents in `/agents`, Prompts in `/prompts`)
- **Persistence:** Local `.md` files in `/output`

## 3. Project Structure to Build
```
.
├── .env                # Variables: GEMINI_API_KEY, ANTHROPIC_API_KEY
├── .gitignore          # Include .env, venv/, __pycache__/, output/
├── requirements.txt    # google-genai, anthropic, python-dotenv
├── main.py             # Entry point: accepts --topic argument
├── agents/
│   ├── __init__.py
│   ├── researcher.py   # Gemini Logic (Scout)
│   ├── writer.py       # Claude Logic (Scribe)
│   └── auditor.py      # Gemini Logic (Fact-Check)
├── prompts/
│   ├── research_dna.md # System instructions for legal scraping
│   └── brand_voice.md  # Parachute Law tone & conversion guidelines
└── output/             # Directory for generated articles
```

## 4. Detailed Agent Logic

### Agent A: The Scout (Gemini)
- **Role:** Forensic Legal Researcher.
- **Task:** Search for "March 2026 UK Family Procedure Rules" and "74-week court backlog stats."
- **Output:** A structured research brief including 3 "Hard Truths" and a 50-word AEO Answer Box.

### Agent B: The Scribe (Claude)
- **Role:** Parachute Law Partner (New Breed Solicitor).
- **Tone:** Friendly, anti-jargon, "fixed-fee" obsessed.
- **Goal:** Write a 1,200-word article using the research brief.
- **Requirement:** Must include a high-conversion CTA at the end.

### Agent C: The Critic (Gemini)
- **Role:** Legal Compliance Officer.
- **Task:** Review Claude's draft against the original research. Flag any "hallucinated" laws or numbers.

## 5. Implementation Instructions for Claude Code
1. **Initialize:** Run `git init`.
2. **Scaffold:** Create all directories and files listed in the structure.
3. **Code:** Implement `main.py` using `argparse`. Ensure it handles the flow: Scout -> Scribe -> Critic -> Save.
4. **Prompts:** Populate `/prompts` with high-detail instructions based on the Parachute Law brand (approachable, results-oriented, transparent).
5. **Clean Up:** Create a `README.md` with instructions: `python main.py --topic "Pension Sharing"`.

## How to Run This with Claude Code
1. Create a folder: `mkdir parachute-app && cd parachute-app`
2. Save the text above as `parachute_spec.md` inside that folder.
3. Launch Claude Code: `claude`
4. Type: "Initialize this project based on @parachute_spec.md. Create the full directory structure, write the Python code, and perform a git commit for the base build."
