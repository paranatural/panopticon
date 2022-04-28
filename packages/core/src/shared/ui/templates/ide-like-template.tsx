import React, { FunctionComponent } from 'react'

import { DoubleResizableVertical } from '../molecules/double-resizable-vertical'
import { TripleResizableHorizontal } from '../molecules/triple-resizable-horizontal'

export const IdeLikeTemplate: FunctionComponent = () => (
  <TripleResizableHorizontal
    slotLeft={
      <DoubleResizableVertical
        top="top"
        bottom="bottom"
      />
    }
    slotMiddle={
      "Triple resizable vertical"
    }
    slotRight={
      <DoubleResizableVertical
        top="top"
        bottom="bottom"
      />
    }
  />
)
