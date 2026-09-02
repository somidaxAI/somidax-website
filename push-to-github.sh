#!/bin/bash
# Somidax Website — Push latest design to GitHub
# Usage: bash push-to-github.sh "your commit message"

set -e

REPO_URL="https://github.com/somidaxAI/somidax-website.git"
SITE_DIR="/workspaces/default/code"
BUILD_DIR="/workspaces/default/somidax-website"
COMMIT_MSG="${1:-Update website design}"

echo ""
echo "╔═══════════════════════════════════════╗"
echo "║   Somidax → GitHub Pages Deploy       ║"
echo "╚═══════════════════════════════════════╝"
echo ""

# Sync latest src files into the website repo folder
echo "▶ Syncing latest source files..."
rsync -a --delete \
  --exclude='node_modules' \
  --exclude='dist' \
  --exclude='.figma' \
  "$SITE_DIR/src/"    "$BUILD_DIR/src/"
rsync -a --delete \
  --exclude='node_modules' \
  "$SITE_DIR/public/" "$BUILD_DIR/public/"
cp "$SITE_DIR/index.html"      "$BUILD_DIR/index.html"
cp "$SITE_DIR/tsconfig.json"   "$BUILD_DIR/tsconfig.json"

echo "▶ Files synced."
echo ""

# Init git if not already
cd "$BUILD_DIR"
if [ ! -d ".git" ]; then
  echo "▶ Initialising git repo..."
  git init
  git remote add origin "$REPO_URL"
fi

# Check remote exists
if ! git remote get-url origin &>/dev/null; then
  git remote add origin "$REPO_URL"
fi

# Stage and commit
echo "▶ Staging changes..."
git add -A

if git diff --cached --quiet; then
  echo "✓ No changes to push — everything is already up to date."
  exit 0
fi

echo "▶ Committing: \"$COMMIT_MSG\""
git commit -m "$COMMIT_MSG"

echo "▶ Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Done! GitHub Actions will now build and deploy your site."
echo "   Live at: https://somidax.net  (allow ~2 minutes)"
echo ""
