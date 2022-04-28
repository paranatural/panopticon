import { stitches } from './stitches'

const globalStyles = stitches.globalCss({
  'html, body, #root': {
    height: '100%',
  },
  body: {
    backgroundColor: '$background',
    fontFamily: '$paragraph',
    color: '$textSecondary',
  }
})

globalStyles()

export {}
