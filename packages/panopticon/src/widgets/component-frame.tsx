import React, { FunctionComponent, ReactNode } from 'react'

interface Props {
  children?: ReactNode,
  className?: string
}

export const ComponentFrame: FunctionComponent<Props> = ({
  className,
  children
}) => (
  <div className={className}>
    {children}
  </div>
)
