# Uzbekistan docs site rules

- Work only on the local `develop` branch. Check the current branch before editing.
- Keep `production` for releases; do not make edits or commits directly on it.
- Push only to the remote `production` branch, and only when the user explicitly requests a push
- Promote reviewed `develop` commits to `production-uz` using a non-force, fast-forward update. Never force-push or overwrite remote changes.
- Keep UZ, RU and EN locales available and run focused checks appropriate to the change; do not build or preview when the user asks not to.