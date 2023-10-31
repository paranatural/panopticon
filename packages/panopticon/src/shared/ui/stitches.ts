import { createStitches } from '@stitches/react'
import { gray, red } from '@radix-ui/colors'

export const stitches = createStitches({
  theme: {
    colors: {
      background: gray.gray2,
      surface: gray.gray1,
      divider: gray.gray6,
      border: gray.gray7,
      uiDormant: red.red9,
      uiActive: red.red10,
      textSecondary: gray.gray11,
      textPrimary: red.red11,
    },
    space: {
      small: '4px',
      medium: '8px',
      large: '16px',
    },
    fonts: {
      heading:
        'system-ui, ' +
        '-apple-system, ' +
        'BlinkMacSystemFont, ' +
        '"Segoe UI", ' +
        '"Roboto", ' +
        '"Oxygen", ' +
        '"Ubuntu", ' +
        '"Cantarell", ' +
        '"Fira Sans", ' +
        '"Droid Sans", ' +
        '"Helvetica Neue", ' +
        '"Arial", ' +
        'sans-serif',
      paragraph:
        'system-ui, ' +
        '-apple-system, ' +
        'BlinkMacSystemFont, ' +
        '"Segoe UI", ' +
        '"Roboto", ' +
        '"Oxygen", ' +
        '"Ubuntu", ' +
        '"Cantarell", ' +
        '"Fira Sans", ' +
        '"Droid Sans", ' +
        '"Helvetica Neue", ' +
        '"Arial", ' +
        'sans-serif',
      code:
        'ui-monospace, ' +
        'Menlo, ' +
        'Monaco, ' +
        '"Cascadia Mono", "Segoe UI Mono", ' +
        '"Roboto Mono", ' +
        '"Oxygen Mono", ' +
        '"Ubuntu Monospace", ' +
        '"Source Code Pro", ' +
        '"Fira Mono", ' +
        '"Droid Sans Mono", ' +
        '"Courier New", ' +
        'monospace',
    },
    fontSizes: {
      heading: '24px',
      paragraph: '16px',
      code: '14px',
    },
  },
})
