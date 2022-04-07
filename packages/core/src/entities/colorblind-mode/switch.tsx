import React, { FunctionComponent } from 'react'
import { useStore } from 'effector-react'

import { colorblindMode } from './store'

export const Switch: FunctionComponent = () => {
  const colorblindModeValue = useStore(colorblindMode.store)

  return (
    <button onClick={() => colorblindMode.toggle()}>
      Colorblind mode: {colorblindModeValue}
    </button>
  )
}
