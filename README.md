# Verificahub Uzbekistan docs site

Independent Docusaurus site for `docs.verificahub.uz`, with Uzbek, Russian and English locales. It consumes only Uzbekistan content from `verificahub-docs`;

Use Node.js 20 or newer. Check out the UZ content repository alongside this repository as `../verificahub-docs-uz`, then run `npm ci` and `npm start` or `npm run build`. Set `DOCS_CONTENT_DIR` to use a different local checkout. The sync script replaces only ignored generated `generated/`, `i18n/`, and `static/links.json` output.

For Docker builds, place a checkout of reviewed UZ content in `content-source/` before running `docker build`. CI pins a specific content commit and builds without deploying. After releasing content to `production-uz`, update the pinned commit in the docs-site workflow. Configure UZ DNS, TLS and a separate deployment workflow after the VPS is ready.

The content repository provides the public offer and privacy policy in all three languages. Confirm actual payment-provider and data-handling arrangements, and obtain legal and acquiring-bank review before accepting payments.