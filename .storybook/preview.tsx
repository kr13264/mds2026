import React from 'react';
import type { Preview, Decorator } from '@storybook/react';
import '../src/index.css';

const CANVAS_DARK_CSS = `
  body, .sb-show-main, .sb-main-padded, .sb-main-centered, .sb-main-fullscreen,
  #storybook-root, .docs-story, .docs-story > div {
    background-color: #111122 !important;
  }
  .docs-story {
    border-color: #2E2E50 !important;
    outline-color: #2E2E50 !important;
  }
`;

const CANVAS_LIGHT_CSS = `
  body, .sb-show-main, .sb-main-padded, .sb-main-centered, .sb-main-fullscreen,
  #storybook-root {
    background-color: #F5F5F8 !important;
  }
`;

const withTheme: Decorator = (Story, context) => {
  const isDark = context.globals['theme'] === 'dark';

  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);

    // Inject style tag to override Storybook's inline appPreviewBg
    let styleEl = document.getElementById('mds-canvas-theme') as HTMLStyleElement | null;
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'mds-canvas-theme';
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = isDark ? CANVAS_DARK_CSS : CANVAS_LIGHT_CSS;
  }, [isDark]);

  return <Story />;
};

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
  parameters: {
    options: {
      storySort: {
        order: [
          'Home',
          'Foundation',
          'Icon',
          'Components',
          ['Buttons', ['Docs', 'Basic', 'Icon', 'Segment', 'Group', 'Overview', '*'], '*'],
          'Templates',
          '*',
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    backgrounds: { disable: true },
    viewport: {
      viewports: {
        mobile: { name: 'Mobile (375)', styles: { width: '375px', height: '812px' } },
        tablet: { name: 'Tablet (768)', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop (1280)', styles: { width: '1280px', height: '900px' } },
        wide: { name: 'Wide (1440)', styles: { width: '1440px', height: '900px' } },
      },
      defaultViewport: 'responsive',
    },
  },
};

export default preview;
