/** @type {import('tailwindcss').Config} */
// BON UI Design System Color Tokens
// CSS variables are defined in src/styles/bon-theme.css
// Install @bonui/styles for the full token set: pnpm install @bonui/styles

module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
      colors: {
        // ── Primary ──────────────────────────────
        primary: {
          DEFAULT: '#6366F1',
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },

        // ── BON UI Neutral Background ─────────────
        'neutral-background-default':          'var(--neutral-background-default)',
        'neutral-background-alpha-1':          'var(--neutral-background-alpha-1)',
        'neutral-background-alpha-2':          'var(--neutral-background-alpha-2)',
        'neutral-background-alpha-3':          'var(--neutral-background-alpha-3)',
        'neutral-background-disabled':         'var(--neutral-background-disabled)',
        'neutral-background-base-basic':       'var(--neutral-background-base-basic)',
        'neutral-background-raised-1':         'var(--neutral-background-raised-1)',
        'neutral-background-raised-2':         'var(--neutral-background-raised-2)',
        'neutral-background-separated-1':      'var(--neutral-background-separated-1)',
        'neutral-background-separated-2':      'var(--neutral-background-separated-2)',
        'neutral-background-inverted-1':       'var(--neutral-background-inverted-1)',
        'neutral-background-inverted-2':       'var(--neutral-background-inverted-2)',
        'neutral-background-inverted-3':       'var(--neutral-background-inverted-3)',
        'neutral-background-static-white':     'var(--neutral-background-static-white)',
        'neutral-background-static-black':     'var(--neutral-background-static-black)',
        'neutral-background-dimmed-default':   'var(--neutral-background-dimmed-default)',
        'neutral-background-dimmed-bold':      'var(--neutral-background-dimmed-bold)',
        'neutral-background-dimmed-ghost':     'var(--neutral-background-dimmed-ghost)',

        // ── BON UI Neutral Foreground ─────────────
        'neutral-foreground-default':          'var(--neutral-foreground-default)',
        'neutral-foreground-subtle-1':         'var(--neutral-foreground-subtle-1)',
        'neutral-foreground-subtle-2':         'var(--neutral-foreground-subtle-2)',
        'neutral-foreground-subtle-3':         'var(--neutral-foreground-subtle-3)',
        'neutral-foreground-disabled':         'var(--neutral-foreground-disabled)',
        'neutral-foreground-inverted-default': 'var(--neutral-foreground-inverted-default)',
        'neutral-foreground-static-white':     'var(--neutral-foreground-static-white)',
        'neutral-foreground-static-black':     'var(--neutral-foreground-static-black)',

        // ── BON UI Neutral Stroke ─────────────────
        'neutral-stroke-default':              'var(--neutral-stroke-default)',
        'neutral-stroke-subtle-1':             'var(--neutral-stroke-subtle-1)',
        'neutral-stroke-subtle-2':             'var(--neutral-stroke-subtle-2)',
        'neutral-stroke-divider':              'var(--neutral-stroke-divider)',
        'neutral-stroke-emphasis':             'var(--neutral-stroke-emphasis)',

        // ── BON UI Primary ────────────────────────
        'primary-background-default':          'var(--primary-background-default)',
        'primary-background-subtle-1':         'var(--primary-background-subtle-1)',
        'primary-background-subtle-2':         'var(--primary-background-subtle-2)',
        'primary-background-decorative':       'var(--primary-background-decorative)',
        'primary-foreground-default':          'var(--primary-foreground-default)',
        'primary-foreground-subtle':           'var(--primary-foreground-subtle)',
        'primary-foreground-inverted':         'var(--primary-foreground-inverted)',
        'primary-stroke-default':              'var(--primary-stroke-default)',

        // ── BON UI Secondary ──────────────────────
        'secondary-background-default':        'var(--secondary-background-default)',
        'secondary-background-subtle-1':       'var(--secondary-background-subtle-1)',
        'secondary-foreground-default':        'var(--secondary-foreground-default)',
        'secondary-stroke-default':            'var(--secondary-stroke-default)',

        // ── BON UI Function ───────────────────────
        'function-positive-default':           'var(--function-common-positive-default)',
        'function-positive-subtle':            'var(--function-common-positive-subtle)',
        'function-negative-default':           'var(--function-common-negative-default)',
        'function-negative-subtle':            'var(--function-common-negative-subtle)',
        'function-informative-default':        'var(--function-common-informative-default)',
        'function-informative-subtle':         'var(--function-common-informative-subtle)',
        'function-attention-default':          'var(--function-common-attention-default)',
        'function-attention-subtle':           'var(--function-common-attention-subtle)',
      },
    },
  },
  plugins: [],
};
