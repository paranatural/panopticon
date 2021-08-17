import { ComponentProps } from 'react'
import { StorySetting, Story, knobs } from 'panopticon'

import { Button } from './button'

const buttonStorySettings: StorySetting<ComponentProps<typeof Button>> = {
  component: Button,
  defaultProps: {
    disabled: false,
  },
  knobs: {
    disabled: knobs.booleanSwitch,
    children: knobs.textField,
  },
  callbacks: [
    'onClick',
    'onFocus',
    'onBlur',
  ]
}

export const buttonStory: Story<ComponentProps<typeof Button>> = {
  settings: buttonStorySettings,
  name: '',
  description: '',
  defaultProps: {
    disabled: false,
  }
}
