import { ComponentProps } from 'react'
import { Exhibit } from 'panopticon-core'
import { BooleanCheckbox } from 'panopticon-stdlib'

import { Button } from './button'

export const buttonExhibit: Exhibit<ComponentProps<typeof Button>> = {
  component: Button,
  name: 'Button',
  description: 'Good old button',
  props: {
    disabled: BooleanCheckbox,
  }
}

