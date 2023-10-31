import { stitches } from '../stitches'

export const ButtonInvisible = stitches.styled('button', {
  display: 'block',

  margin: 0,
  border: 'none',
  padding: 0,

  appearance: 'none',
  backgroundColor: 'transparent',
  color: 'inherit',
  lineHeight: 0,

  cursor: 'pointer',
})
