// src/plugins/InjectCssVars.ts
import type { Plugin } from 'vite';

/**
 * Custom Vite plugin that injects CSS custom properties (variables)
 * into the <head> of the HTML document at build time.
 *
 * @param cssVars - Object containing CSS variables
 */
export function InjectCssVars(
  vars: Record<string, string> = {},
): Plugin {
  return {
    name: 'inject-css-vars',
    transformIndexHtml() {
      if (Object.keys(vars).length === 0) return [];
      
      let cssVars: Record<string, string> = {};
      for (let [key, value] of Object.entries(cssVars)) {
        key = '--' + key.trim().replace(/^-+/, '').trim();
        cssVars[key] = value;
      }

      const cssVarDeclarations = Object.entries(cssVars)
        .map(([key, value]) => `  ${key}: ${value};`)
        .join('\n');

      return [
        {
          tag: 'style',
          injectTo: 'head',
          children: `:root {\n${cssVarDeclarations}\n}`,
        },
      ];
    },
  };
}