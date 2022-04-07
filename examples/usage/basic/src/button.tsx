import React, { FunctionComponent, HTMLProps } from 'react'

type ButtonProps = HTMLProps<HTMLButtonElement>

export const Button: FunctionComponent<ButtonProps> = ({
  disabled,
  children,
}) => (
  <button
    disabled={disabled}
  >
    {children}
  </button>
)
