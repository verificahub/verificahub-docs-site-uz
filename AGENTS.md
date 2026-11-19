# Uzbekistan docs site rules

Docusaurus site for `docs.verificahub.uz` (UZ default, RU, EN). Content comes from `verificahub/verificahub-docs-uz`; locally from `../verificahub-docs-uz` (or `DOCS_CONTENT_DIR`).

## Branch
- This repository has a single branch, `production`. Work on it directly; check the current branch before editing.
- Every push to `production` deploys to GitHub Pages, so build locally first.
- Push only when the user explicitly asks. Force-push only when the user explicitly asks for it.

## Deploy
- A push to `production` runs `.github/workflows/deploy.yml` → GitHub Pages.
- A push to `production` in `verificahub-docs-uz` sends a `docs-production-updated` dispatch → the same deploy, built with that content commit. Dispatches run from the default branch, which must stay `production` (the `github-pages` environment only allows `production`).
- `.github/workflows/check.yml` builds against content `develop` on pull requests and manual runs; it never deploys.
- Keep `static/CNAME` (`docs.verificahub.uz`); a root-level CNAME is not deployed.

## Commits
- No `Co-Authored-By: Claude` trailers and no "Generated with Claude Code" lines in commits or PRs.

## Checks
- Keep UZ, RU and EN locales available.
- Run focused checks for the change (`npm run typecheck`, `npm run build` with content checked out). Don't build or preview when the user asks not to.
