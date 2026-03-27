import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  colorPrimary: '#03A94D',
  colorSecondary: '#03A94D',
});

addons.setConfig({
  theme,
});
