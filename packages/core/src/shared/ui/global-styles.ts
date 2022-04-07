import { stitches } from './stitches'

const globalStyles = stitches.globalCss({
  'html, body, #root': {
    height: '100%',
  },
  body: {
    fontFamily: '$paragraph',
    color: '$textSecondary',
  }
})

globalStyles()

export {}
