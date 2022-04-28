import React, { FunctionComponent } from 'react'

import { panopticonLogo, stitches } from 'src/shared/ui'

const Container = stitches.styled('div', {
  flex: '0 0 32px',

  overflow: 'hidden',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const Img = stitches.styled('img', {
  height: '100%',
  maxWidth: '100%',
})

interface Props {
  src?: string
}

export const Logo: FunctionComponent<Props> = ({
  src,
}) => (
  <Container>
    <Img src={src || panopticonLogo} />
  </Container>
)
