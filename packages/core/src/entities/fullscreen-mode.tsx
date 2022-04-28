import React from 'react'
import { Icon } from '@mdi/react'
import { mdiFullscreen, mdiFullscreenExit } from '@mdi/js'

import { createEnumController } from 'src/shared/lib/create-enum-controller'

export const fullscreenMode = createEnumController(
  [{
    value: true,
    icon: <Icon path={mdiFullscreen} size="24px" />
  }, {
    value: false,
    icon: <Icon path={mdiFullscreenExit} size="24px" />
  }],
  false,
)
