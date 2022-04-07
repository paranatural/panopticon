import React, { FunctionComponent } from 'react'
import { useStore } from 'effector-react'

import { colorTheme } from './store'

export const Switch: FunctionComponent = () => {
  const colorThemeValue = useStore(colorTheme.store)

  return (
    <button onClick={() => colorTheme.toggle()}>
      Color theme: {colorThemeValue}
    </button>
  )
}
