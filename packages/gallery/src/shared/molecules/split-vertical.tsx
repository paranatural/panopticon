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

const Top: FunctionComponent<ComponentProps<typeof Resizable>> = ({
  ...props
}) => (
  <Resizable
    enable={{ ...reResizableEnableProp, bottom: true }}
    defaultSize={{
      width: '100%',
      height: '50%',
    }}
    minHeight="15%"
    maxHeight="85%"
    {...props}
  />
)

const Bottom = stitches.styled('div', {
  flex: '1 1 0',
})

export const splitVertical = {
  Container,
  Top,
  Bottom,
}
