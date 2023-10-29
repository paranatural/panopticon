import React, { ComponentProps, FunctionComponent } from 'react'
import { Resizable } from 're-resizable'

import { stitches } from '../stitches'
import { reResizableEnableProp } from '../utils/re-resizable-enable-prop'

const Container = stitches.styled('div', {
  width: '100%',
  height: '100%',
  flex: '1 1 auto',
  flexDirection: 'column',
})

const Left: FunctionComponent<ComponentProps<typeof Resizable>> = ({
  ...props
}) => (
  <Resizable
    enable={{ ...reResizableEnableProp, right: true }}
    defaultSize={{
      width: '50%',
      height: '100%',
    }}
    minWidth="15%"
    maxWidth="85%"
    {...props}
  />
)

const Right = stitches.styled('div', {
  flex: '1 1 0',
})

export const splitHorizontal = {
  Container,
  Left,
  Right,
}
