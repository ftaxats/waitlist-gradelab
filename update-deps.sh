#!/bin/bash

# Remove old lock file
rm -f pnpm-lock.yaml

# Install dependencies to regenerate lock file
pnpm install

# Add all changes
git add .

# Commit the changes
git commit -m "Update dependencies and regenerate lock file"

echo "Dependencies updated and lock file regenerated!"
