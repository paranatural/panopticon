import React, { FunctionComponent, ReactNode } from 'react'
import { Resizable } from 're-resizable'

import { stitches } from '../stitches'

const Container = stitches.styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',

  '& > *:not(:first-child)': {
    borderTop: '2px solid red',
  },
})

const TopResizable = stitches.styled(Resizable, {})

const Bottom = stitches.styled('div', {
  flex: '1 0 auto',
})

type Props = {
  top?: ReactNode
  bottom: ReactNode
} | {
  top: ReactNode
  bottom?: ReactNode
}

export const DoubleResizableVertical: FunctionComponent<Props> = ({
  top,
  bottom,
}) => (
  <Container>
    {top && (
      <TopResizable
        minHeight="15%"
        maxHeight="85%"
        enable={{
          top: false,
          topRight: false,
          right: false,
          bottomRight: false,
          bottom: true,
          bottomLeft: false,
          left: false,
          topLeft: false,
        }}
        defaultSize={{
          width: '100%',
          height: '50%',
        }}>
        {top}
      </TopResizable>
    )}
    {bottom && (
      <Bottom>
        {bottom}
      </Bottom>
    )}
  </Container>
)
