import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'

const source = resolve(process.env.DOCS_CONTENT_DIR || '../verificahub-docs')
for (const name of ['docs', 'i18n', 'registry/links.json']) {
  if (!existsSync(resolve(source, name))) throw new Error(`Missing UZ documentation content: ${resolve(source, name)}`)
}
rmSync('generated', { recursive: true, force: true })
rmSync('i18n', { recursive: true, force: true })
mkdirSync('generated', { recursive: true })
mkdirSync('static', { recursive: true })
cpSync(resolve(source, 'docs'), 'generated/docs', { recursive: true })
cpSync(resolve(source, 'i18n'), 'i18n', { recursive: true })
cpSync(resolve(source, 'registry/links.json'), 'static/links.json')