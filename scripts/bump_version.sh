#!/usr/bin/env bash
# Script para incrementar la versión en version.txt (formato MAJOR.MINOR.PATCH)
set -e
cd "$(dirname "$0")/.."
if [ ! -f version.txt ]; then echo "0.1.0" > version.txt; fi
ver=$(cat version.txt)
IFS='.' read -r major minor patch <<< "$ver"
patch=$((patch + 1))
new="$major.$minor.$patch"
echo "$new" > version.txt
git add version.txt
git commit -m "chore: bump version to $new" || echo "no changes to commit"
echo "Versión actualizada a $new"