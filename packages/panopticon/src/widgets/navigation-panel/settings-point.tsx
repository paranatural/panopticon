import React, { FunctionComponent } from 'react'
import { Icon } from '@mdi/react'
import { mdiTune } from '@mdi/js'

import { Point } from './point'

export const SettingsPoint: FunctionComponent = () => (
  <Point
    icon={<Icon path={mdiTune} size="24px" />}
    label="Settings"
  />
)
