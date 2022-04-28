import React from 'react'
import { Icon } from '@mdi/react'
import { mdiEyeOutline } from '@mdi/js'

import { createEnumController } from 'src/shared/lib/create-enum-controller'

export const colorblindMode = createEnumController(
  [{
    value: 'normal',
    icon: <Icon path={mdiEyeOutline} size="24px" />
  }, {
    value: 'protanopia',
    icon: <Icon path={mdiEyeOutline} size="24px" />
  }, {
    value: 'deuteranopia',
    icon: <Icon path={mdiEyeOutline} size="24px" />
  }],
  'normal'
)
