import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'MDS Design System',
  brandUrl: '/',
  brandTarget: '_self',

  colorPrimary: '#6366F1',
  colorSecondary: '#6366F1',

  appBg: '#F5F5F8',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#E4E4EE',
  appBorderRadius: 8,

  fontBase: "'Pretendard', -apple-system, sans-serif",
  fontCode: "'JetBrains Mono', 'Fira Code', monospace",

  textColor: '#111122',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#55557A',

  barTextColor: '#55557A',
  barHoverColor: '#6366F1',
  barSelectedColor: '#6366F1',
  barBg: '#F5F5F8',

  buttonBg: '#FFFFFF',
  buttonBorder: '#E4E4EE',

  booleanBg: '#E4E4EE',
  booleanSelectedBg: '#6366F1',

  inputBg: '#FFFFFF',
  inputBorder: '#E4E4EE',
  inputTextColor: '#111122',
  inputBorderRadius: 4,
});

addons.setConfig({ theme });
