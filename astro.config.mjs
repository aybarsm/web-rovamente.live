// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { InjectCssVars } from './src/plugins/InjectCssVars.ts';

export const siteConfig = {
  defaults: {
    layout: {
      headTitle: 'Rovamente',
      htmlLang: 'tr',
      htmlClass: '',
      bodyClass: '',
    },
  },
  redirects: {
    'kick': 'https://kick.com/rovamente',
    'discord': 'https://discord.gg/guRe56y69t',
    'instagram': 'https://instagram.com/rovamente',
    'tiktok': 'https://tiktok.com/@rovamente',
    'bynogame': 'https://donate.bynogame.com/rovamente',
  },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://rovamente.live',
  base: '/',
  trailingSlash: 'ignore',
  redirects: {
    '/go/kick': siteConfig.redirects.kick,
    '/go/izle': siteConfig.redirects.kick,
    '/go/discord': siteConfig.redirects.discord,
    '/go/dc': siteConfig.redirects.discord,
    '/go/instagram': siteConfig.redirects.instagram,
    '/go/insta': siteConfig.redirects.instagram,
    '/go/tiktok': siteConfig.redirects.tiktok,
    '/go/bynogame': siteConfig.redirects.bynogame,
    '/go/bagis': siteConfig.redirects.bynogame,
    '/go/donate': siteConfig.redirects.bynogame,
  },
  vite: {
    plugins: [
      tailwindcss(),
      InjectCssVars({
        'color-theme': '#CEED61',
      })
    ]
  },
  fonts: [
    {
      name: 'Inter',
      cssVariable: '--font-inter',
      provider: fontProviders.google(),
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin-ext'],
      fallbacks: ['system-ui', 'sans-serif']
    },
    {
      name: 'Space Grotesk',
      cssVariable: '--font-space-grotesk',
      provider: fontProviders.google(),
      weights: [500, 600],
      styles: ['normal'],
      subsets: ['latin-ext'],
      fallbacks: ['sans-serif']
    }
  ],
  devToolbar: {
    enabled: false,
  }
});