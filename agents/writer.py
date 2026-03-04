"""The Scribe — Claude-powered empathetic blog writer."""

import os
from pathlib import Path

from anthropic import Anthropic


PROMPT_PATH = Path(__file__).resolve().parent.parent / "prompts" / "brand_voice.md"


def write(topic: str, research_brief: str) -> str:
    """Draft a ~1,200-word Parachute Law article from the research brief."""
    system_prompt = PROMPT_PATH.read_text(encoding="utf-8")

    client = Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])

    message = client.messages.create(
        model="claude-sonnet-4-5-20250929",
        max_tokens=4096,
        system=system_prompt,
        messages=[
            {
                "role": "user",
                "content": (
                    f"Write a 1,200-word blog post for ParachuteLaw.co.uk on the topic: {topic}\n\n"
                    f"Use the following research brief as your factual backbone. "
                    f"Follow the Conversion Structure from your system instructions exactly.\n\n"
                    f"--- RESEARCH BRIEF ---\n{research_brief}"
                ),
            }
        ],
    )
    return message.content[0].text
