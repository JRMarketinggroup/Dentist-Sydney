#!/bin/bash
set -euo pipefail

# Only run in Claude Code remote (web) environment
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Signal async mode — hook runs in background while session starts
echo '{"async": true, "asyncTimeout": 300000}'

cd "$CLAUDE_PROJECT_DIR"

# Install dependencies
echo "Installing npm dependencies..."
npm install

# Start Next.js dev server in background, persisting after script exits
echo "Starting Next.js dev server..."
nohup npm run dev > /tmp/next-dev.log 2>&1 &

echo "Session start hook complete."
