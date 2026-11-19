# Uzbekistan docs site rules

Docusaurus site for `docs.verificahub.uz` (UZ default, RU, EN). Content comes from `verificahub/verificahub-docs-uz`; locally from `../verificahub-docs-uz` (or `DOCS_CONTENT_DIR`).

## Branches
- Work only on local `develop`; check the current branch before editing.
- `production` is the release branch. Don't edit or commit on it directly.
- Promote reviewed `develop` commits to `production` by fast-forward only (`git push origin develop:production`).
- Push only when the user explicitly asks. Force-push only when the user explicitly asks for it.

## Deploy
- A push to `production` runs `.github/workflows/deploy.yml` → GitHub Pages.
- A push to `production` in `verificahub-docs-uz` sends a `docs-production-updated` dispatch → the same deploy, built with that content commit.
- `.github/workflows/check.yml` builds against content `develop` on pushes to `develop` and on PRs.
- Keep `static/CNAME` (`docs.verificahub.uz`); a root-level CNAME is not deployed.

## Commits
- No `Co-Authored-By: Claude` trailers and no "Generated with Claude Code" lines in commits or PRs.

## Checks
- Keep UZ, RU and EN locales available.
- Run focused checks for the change (`npm run typecheck`, `npm run build` with content checked out). Don't build or preview when the user asks not to.
