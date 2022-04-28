import React from 'react'
import { Icon } from '@mdi/react'
import { mdiCardOutline, mdiDockLeft } from '@mdi/js'

import { createEnumController } from 'src/shared/lib/create-enum-controller'

export const navigationPosition = createEnumController(
  [{
    value: 'none',
    icon: <Icon path={mdiCardOutline} size="24px" />
  }, {
    value: 'left',
    icon: <Icon path={mdiDockLeft} size="24px" />
  }],
  'left',
)
