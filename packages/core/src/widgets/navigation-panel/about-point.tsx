import React, { FunctionComponent } from 'react'
import { Icon } from '@mdi/react'
import { mdiInformationOutline} from '@mdi/js'

import { Point } from './point'

export const AboutPoint: FunctionComponent = () => (
  <Point
    icon={<Icon path={mdiInformationOutline} size="24px" />}
    label="Info"
  />
)
