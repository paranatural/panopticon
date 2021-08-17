import React, { FunctionComponent } from 'react'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

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
