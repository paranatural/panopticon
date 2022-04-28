import React, { FunctionComponent } from 'react'
import { Icon } from '@mdi/react'
import { mdiAppleKeyboardCommand } from '@mdi/js'

import { Point } from './point'

export const ShortcutsPoint: FunctionComponent = () => (
  <Point
    icon={<Icon path={mdiAppleKeyboardCommand} size="24px" />}
    label="Shortcuts"
  />
)
