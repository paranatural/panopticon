import React, { FunctionComponent } from 'react'
import { mdiMagnify } from '@mdi/js'
import { Icon } from '@mdi/react'

import { stitches } from 'src/shared/ui'

import { Point } from './point'

const StyledInput = stitches.styled('input', {
  width: '100%',
  height: '32px',
  border: 'none',
  padding: 0,

  backgroundColor: 'transparent',
})

export const SearchBarPoint: FunctionComponent = () => (
  <Point
    icon={
      <Icon path={mdiMagnify} size="24px" />
    }
    label={
      <StyledInput
        type="search"
        placeholder="Search"
      />
    }
  />
)
