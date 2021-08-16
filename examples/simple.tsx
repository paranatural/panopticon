import React, { FunctionComponent, ComponentProps } from 'react'
import ReactDOM from 'react-dom'
import { Panopticon, StorySetting, Story, knobs } from 'panopticon'

// button.tsx

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button: FunctionComponent<ButtonProps> = ({
  disabled,
  children,
}) => (
  <button
    disabled={disabled}
  >
    {children}
  </button>
)

// button.story.ts

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

const buttonStory: Story<ComponentProps<typeof Button>> = {
  settings: buttonStorySettings,
  name: '',
  description: '',
  defaultProps: {
    disabled: false,
  }
}

// app.ts

const PanopticonPage = () => (
  <Panopticon
    stories={[
      buttonStory
    ]}
  />
)

ReactDOM.render(
  <PanopticonPage />,
  document.querySelector('#react'),
)
