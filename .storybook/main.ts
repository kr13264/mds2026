import type { StorybookConfig } from '@storybook/react-vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.mdx',
    '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-themes',
    '@storybook/addon-designs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal(config) {
    config.plugins = [...(config.plugins ?? []), tailwindcss()];
    const src = path.resolve(process.cwd(), 'src');
    config.resolve = config.resolve ?? {};
    const alias = config.resolve.alias;
    if (Array.isArray(alias)) {
      alias.push({ find: '@', replacement: src });
    } else {
      config.resolve.alias = { ...(alias as Record<string, string> ?? {}), '@': src };
    }
    return config;
  },
  managerHead: (head) => `
    ${head}
    <style>
      /* Brand title font size */
      .sidebar-header a,
      a[href="./"],
      div[class*="BrandLink"],
      div[class*="brandLink"],
      a[class*="BrandLink"],
      a[class*="brandLink"] {
        font-size: 18px !important;
        font-weight: 700 !important;
        letter-spacing: -0.3px !important;
      }
    </style>
  `,
  docs: {
    autodocs: 'tag',
  },
  staticDirs: [{ from: '../public', to: '/' }],
};

export default config;
