import { createStitches } from '@stitches/react'
import { mauve, red } from '@radix-ui/colors'
import '@fontsource/raleway/variable.css'

import { fontStacks } from './utils/font-stacks'

export const stitches = createStitches({
  theme: {
    colors: {
      pageBack: mauve.mauve1,

      pageSurfDivider: mauve.mauve5,

      surfBack: mauve.mauve2,

      surfElemDivider: mauve.mauve6,

      elemDormantBack: red.red1,
      elemDormantBorder: red.red7,
      elemDormantFore: red.red11,

      elemActiveBack: red.red2,
      elemActiveBorder: red.red8,
      elemActiveFore: red.red12,
    },
    fonts: {
      heading: ['RalewayVariable', ...fontStacks.sans].join(', '),
      paragraph: ['RalewayVariable', ...fontStacks.sans].join(', '),
      code: fontStacks.sans.join(', '),
    },
    fontSizes: {
      heading: '1.5rem',
      paragraph: '1rem',
      code: '0.8rem',
    },
    fontWeights: {
      heading: 'bold',
      paragraph: 'normal',
      code: 'normal',
    },
    space: {
      small: '4px',
      medium: '8px',
      large: '16px',
    },
    sizes: {
      elem: '32px',
    },
  },
})
