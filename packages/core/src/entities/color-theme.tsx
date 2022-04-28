import React from 'react'
import { Icon } from '@mdi/react'
import { mdiMoonFull, mdiMoonNew, mdiMoonWaningCrescent } from '@mdi/js'

import { createEnumController } from 'src/shared/lib/create-enum-controller'

export const colorTheme = createEnumController(
  [{
    value: 'light',
    icon: <Icon path={mdiMoonNew} size="24px" />
  }, {
    value: 'dark',
    icon: <Icon path={mdiMoonWaningCrescent} size="24px" />
  }, {
    value: 'amoled',
    icon: <Icon path={mdiMoonFull} size="24px" />
  }],
  'light'
)
