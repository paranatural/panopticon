import React, { ComponentProps, FunctionComponent, ReactNode } from 'react'
import { Resizable } from 're-resizable'

import { stitches } from '../stitches'

import { reResizableEnableProp } from '../utils/re-resizable-enable-prop'

const Container = stitches.styled('div', {
  width: '100%',
  height: '100%',
  flex: '1 1 auto',

  display: 'flex',

  '& > *:not(:first-child)': {
    borderLeft: '2px solid red'
  }
})

const LeftResizable = stitches.styled(Resizable, {
  display: 'flex',
  flexDirection: 'column',
})

const Middle = stitches.styled('div', {
  flex: '1 1 auto',

  display: 'flex',
  flexDirection: 'column',
})

const RightResizable = stitches.styled(Resizable, {
  display: 'flex',
  flexDirection: 'column',
})

interface Props extends ComponentProps<typeof Container> {
  slotLeft?: ReactNode
  slotMiddle?: ReactNode
  slotRight?: ReactNode
}

export const TripleResizableHorizontal: FunctionComponent<Props> = ({
  slotLeft,
  slotMiddle,
  slotRight,
  ...props
}) => (
  <Container {...props}>
    {slotLeft && (
      <LeftResizable
        enable={{ ...reResizableEnableProp, right: true, }}
        defaultSize={{
          height: '100%',
          width: '25%',
        }}
        minWidth='15%'
        maxWidth='35%'>
        {slotLeft}
      </LeftResizable>
    )}
    <Middle>
      {slotMiddle}
    </Middle>
    {slotRight && (
      <RightResizable
        enable={{ ...reResizableEnableProp, left: true, }}
        defaultSize={{
          height: '100%',
          width: '25%',
        }}
        minWidth='15%'
        maxWidth='35%'>
        {slotRight}
      </RightResizable>
    )}
  </Container>
)
