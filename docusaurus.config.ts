import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Verificahub Docs',
  tagline: 'Verificahub Uzbekistan',
  favicon: 'img/favicon.ico',
  url: 'https://docs.verificahub.uz',
  baseUrl: '/',
  trailingSlash: true,
  organizationName: 'verificahub',
  projectName: 'verificahub-docs-site',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'uz',
    locales: ['uz', 'ru', 'en'],
    localeConfigs: {uz: {label: "O‘zbekcha"}, ru: {label: 'Русский'}, en: {label: 'English'}},
  },
  presets: [['classic', {
    docs: {path: 'generated/docs', routeBasePath: '/', sidebarPath: './sidebars.ts'},
    blog: false,
    theme: {customCss: './src/css/custom.css'},
  } satisfies Preset.Options]],
  themeConfig: {
    colorMode: {defaultMode: 'light', disableSwitch: true},
    navbar: {
      title: 'Verificahub',
      logo: {alt: 'Verificahub', src: 'img/logo.svg'},
      items: [{type: 'localeDropdown', position: 'right'}],
    },
    footer: {links: [{title: 'Verificahub', items: [{label: 'verificahub.uz', href: 'https://verificahub.uz/'}, {label: 'support@verificahub.uz', href: 'mailto:support@verificahub.uz'}]}]},
  },
};

export default config;