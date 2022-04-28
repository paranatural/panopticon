import React, { FunctionComponent, ReactNode } from 'react'
import { Resizable } from 're-resizable'

import { stitches } from '../stitches'

const Container = stitches.styled('div', {
  display: 'flex',

  '& > *:not(:first-child)': {
    borderLeft: '2px solid red',
  }
})

const LeftResizable = stitches.styled(Resizable, {
  display: 'flex',
  flexDirection: 'column',
})

const Right = stitches.styled('div', {
  flex: '1 0 auto',

  display: 'flex',
  flexDirection: 'column',
})

interface Props {
  left?: ReactNode
  right?: ReactNode
  className?: string
}

export const DoubleResizableHorizontal: FunctionComponent<Props> = ({
  left,
  right,
  className,
}) => (
  <Container className={className}>
    <LeftResizable
      minWidth="15%"
      maxWidth="85%"
      enable={{
        top: false,
        topRight: false,
        right: true,
        bottomRight: false,
        bottom: false,
        bottomLeft: false,
        left: false,
        topLeft: false,
      }}>
      {left}
    </LeftResizable>
    <Right>
      {right}
    </Right>
  </Container>
)
