#!/bin/bash
echo "Launch Claude Code:"
echo "  1) Safe mode (asks before acting)"
echo "  2) Fast mode (no confirmations)"
read -p "Pick 1 or 2: " choice

if [ "$choice" = "2" ]; then
  claude --dangerously-skip-permissions
else
  claude
fi
