import type { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: (a, b) => {
        if (a.title !== b.title) {
          if (b.title.startsWith(a.title + '/') && a.type === 'docs') return -1;
          if (a.title.startsWith(b.title + '/') && b.type === 'docs') return 1;
          return a.title.localeCompare(b.title);
        }
        if (a.type === 'docs') return -1;
        if (b.type === 'docs') return 1;
        return a.name.localeCompare(b.name);
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F5F5F8' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'dark', value: '#111122' },
      ],
    },
    viewport: {
      viewports: {
        mobile: { name: 'Mobile (375)', styles: { width: '375px', height: '812px' } },
        tablet: { name: 'Tablet (768)', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop (1280)', styles: { width: '1280px', height: '900px' } },
        wide: { name: 'Wide (1440)', styles: { width: '1440px', height: '900px' } },
      },
      defaultViewport: 'desktop',
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
