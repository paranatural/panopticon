import React, { FunctionComponent } from 'react'
import { Icon } from '@mdi/react'
import { mdiCubeScan } from '@mdi/js'

import { ButtonInvisible } from 'src/shared/ui'

export const Button: FunctionComponent = () => (
  <ButtonInvisible>
    <Icon path={mdiCubeScan} size="24px" />
  </ButtonInvisible>
)
