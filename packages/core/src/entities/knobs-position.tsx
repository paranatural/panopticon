import React from 'react'
import { Icon } from '@mdi/react'
import { mdiCardOutline, mdiDockBottom, mdiDockRight } from '@mdi/js'

import { createEnumController } from 'src/shared/lib/create-enum-controller'

export const knobsPosition = createEnumController(
  [{
    value: 'none',
    icon: <Icon path={mdiCardOutline} size="24px" />
  }, {
    value: 'right',
    icon: <Icon path={mdiDockRight} size="24px" />
  }, {
    value: 'bottom',
    icon: <Icon path={mdiDockBottom} size="24px" />
  }],
  'bottom'
)
