import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';
import { GLOBALS_UPDATED } from '@storybook/core-events';

// ── BON UI Light Theme ────────────────────────────────────────────────────
const lightTheme = create({
  base: 'light',
  brandTitle: 'MDS2026',
  colorPrimary: '#03A94D',
  colorSecondary: '#03A94D',
  fontBase: "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",
  fontCode: 'monospace',
  appBg:           '#F5F5F8',
  appContentBg:    '#FFFFFF',
  appPreviewBg:    '#F5F5F8',
  appBorderColor:  '#E4E4EE',
  appBorderRadius: 8,
  textColor:        '#111122',
  textInverseColor: '#FFFFFF',
  textMutedColor:   '#9999B8',
  barBg:           '#FFFFFF',
  barTextColor:    '#55557A',
  barSelectedColor:'#03A94D',
  barHoverColor:   '#03A94D',
  inputBg:           '#FFFFFF',
  inputBorder:       '#E4E4EE',
  inputTextColor:    '#111122',
  inputBorderRadius: 6,
  buttonBg:     '#FFFFFF',
  buttonBorder: '#E4E4EE',
});

// ── BON UI Dark Theme ─────────────────────────────────────────────────────
const darkTheme = create({
  base: 'dark',
  brandTitle: 'MDS2026',
  colorPrimary: '#03C75A',
  colorSecondary: '#03C75A',
  fontBase: "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",
  fontCode: 'monospace',
  appBg:           '#1A1A2E',
  appContentBg:    '#111122',
  appPreviewBg:    '#111122',
  appBorderColor:  '#2E2E50',
  appBorderRadius: 8,
  textColor:        '#F0F0F8',
  textInverseColor: '#111122',
  textMutedColor:   '#6666AA',
  barBg:           '#1A1A2E',
  barTextColor:    '#AAAACC',
  barSelectedColor:'#03C75A',
  barHoverColor:   '#03C75A',
  inputBg:           '#1E1E36',
  inputBorder:       '#333355',
  inputTextColor:    '#F0F0F8',
  inputBorderRadius: 6,
  buttonBg:     '#1E1E36',
  buttonBorder: '#333355',
});

// ── Brand title font size override ───────────────────────────────────────
const BRAND_CSS = `
  [class*="brand"] a, [class*="Brand"] a,
  [class*="branding"] a, [class*="Branding"] a {
    font-size: 18px !important;
    font-weight: 700 !important;
    letter-spacing: -0.3px !important;
  }
`;
(function injectBrandStyle() {
  const el = document.createElement('style');
  el.id = 'mds-brand-style';
  el.textContent = BRAND_CSS;
  document.head.appendChild(el);
})();

// ── CSS override injection for dynamic theme switch ───────────────────────
const DARK_CSS = `
  body, #root { background-color: #111122 !important; color: #F0F0F8 !important; }
  nav, [class*="sidebar"], [class*="Sidebar"] { background-color: #1A1A2E !important; border-color: #2E2E50 !important; }
  [class*="toolbar"], [class*="Toolbar"] { background-color: #1A1A2E !important; border-color: #2E2E50 !important; }
  [class*="panel"], [class*="Panel"] { background-color: #111122 !important; border-color: #2E2E50 !important; }
  [class*="Tab"], [class*="tab"] { color: #AAAACC !important; }
  [class*="search"], [class*="Search"] input { background-color: #1E1E36 !important; color: #F0F0F8 !important; border-color: #333355 !important; }
  input, select, textarea { background-color: #1E1E36 !important; color: #F0F0F8 !important; border-color: #333355 !important; }
  a, button { color: inherit !important; }
`;

function applyManagerTheme(isDark: boolean) {
  let styleEl = document.getElementById('mds-manager-theme') as HTMLStyleElement | null;
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'mds-manager-theme';
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = isDark ? DARK_CSS : '';
}

// ── Initial theme: always light (matches canvas defaultValue: 'light') ───
addons.setConfig({ theme: lightTheme });
applyManagerTheme(false);

// ── Sync with canvas Dark toggle ──────────────────────────────────────────
addons.register('mds-theme-sync', () => {
  const channel = addons.getChannel();
  channel.on(GLOBALS_UPDATED, ({ globals }: { globals: Record<string, string> }) => {
    const isDark = globals['theme'] === 'dark';
    addons.setConfig({ theme: isDark ? darkTheme : lightTheme });
    applyManagerTheme(isDark);
  });
});
