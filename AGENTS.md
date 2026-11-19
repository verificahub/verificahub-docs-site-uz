# Uzbekistan docs site rules

- Work only on the local `develop` branch. Check the current branch before editing.
- Keep `production` for releases; do not make edits directly on it.
- Push only when the user explicitly requests a push.
- Promote reviewed `develop` commits to `production` using a non-force, fast-forward update. Never force-push or overwrite remote changes.
- Pushing `production` deploys to GitHub Pages (`docs.verificahub.uz`).
- Keep UZ, RU and EN locales available and run focused checks appropriate to the change; do not build or preview when the user asks not to.
