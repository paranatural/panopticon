import React, { FunctionComponent } from 'react'

interface Props {

}

export const ComponentFrame: FunctionComponent<Props> = ({
  children
}) => (
  <div>
    {children}
  </div>
)
