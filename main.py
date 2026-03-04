"""Parachute Law Content Engine — Scout, Scribe, Critic pipeline."""

import argparse
import re
from datetime import date
from pathlib import Path

from dotenv import load_dotenv

from agents.researcher import research
from agents.writer import write
from agents.auditor import audit


OUTPUT_DIR = Path(__file__).resolve().parent / "output"


def slugify(text: str) -> str:
    """Turn a title into a filename-safe slug."""
    text = text.lower().strip()
    text = re.sub(r"[^\w\s-]", "", text)
    return re.sub(r"[\s_]+", "-", text)


def main():
    parser = argparse.ArgumentParser(description="Parachute Law Content Engine")
    parser.add_argument("--topic", required=True, help="Blog topic to research and write about")
    args = parser.parse_args()

    load_dotenv()

    topic = args.topic

    # 1. Scout
    print(f"\n🔍  Scout: Researching '{topic}' via Gemini …")
    brief = research(topic)
    print("    ✅  Research brief ready.\n")

    # 2. Scribe
    print(f"✍️   Scribe: Drafting article via Claude …")
    draft = write(topic, brief)
    print("    ✅  Draft complete.\n")

    # 3. Critic
    print("🔎  Critic: Auditing draft via Gemini …")
    audit_report = audit(brief, draft)
    print("    ✅  Audit complete.\n")

    # 4. Save
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    filename = f"{date.today().isoformat()}-{slugify(topic)}.md"
    filepath = OUTPUT_DIR / filename

    output = (
        f"# {topic}\n\n"
        f"{draft}\n\n"
        f"---\n\n"
        f"## Audit Report\n\n{audit_report}\n"
    )
    filepath.write_text(output, encoding="utf-8")

    print(f"📄  Saved to {filepath}")
    print("    Done!\n")


if __name__ == "__main__":
    main()
