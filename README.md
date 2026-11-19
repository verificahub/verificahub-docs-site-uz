# Verificahub Uzbekistan docs site

Docusaurus site for `docs.verificahub.uz`, with Uzbek, Russian and English locales. Content comes from `verificahub/verificahub-docs-uz`.

## Local development

Use Node.js 20 or newer. Check out the content repository alongside this one as `../verificahub-docs-uz`, then run `npm ci` and `npm start` or `npm run build`. Set `DOCS_CONTENT_DIR` to use a different checkout. The sync script replaces only the ignored `generated/`, `i18n/` and `static/links.json` output.

## Branch and deployment

This repository has a single branch, `production`, which is also the default branch. Every push deploys to GitHub Pages. Content changes go through `verificahub-docs-uz` (`develop` → `production`). The build check (`.github/workflows/check.yml`) runs on pull requests and manual runs against content `develop`, and never deploys.

Deployment (`.github/workflows/deploy.yml`) runs when:

1. `production` is pushed in this repository (builds with content `production`), or
2. `production` is pushed in `verificahub-docs-uz`, which sends a `docs-production-updated` repository dispatch with the content commit SHA, or
3. it is started manually.

The content repository is public, so this repository needs no secrets. `verificahub-docs-uz` needs one secret, `SITE_DISPATCH_TOKEN`: a fine-grained token scoped to this repository with Contents: read and write, used to send the dispatch.

Under Settings → Pages, set Source to GitHub Actions and the custom domain to `docs.verificahub.uz`. `static/CNAME` keeps the domain in the build output.

## Docker

For Docker builds, place a checkout of reviewed content in `content-source/` before running `docker build`.

The content repository provides the public offer and privacy policy in all three languages. Confirm actual payment-provider and data-handling arrangements, and obtain legal and acquiring-bank review before accepting payments.
