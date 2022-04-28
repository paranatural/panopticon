import React, { ComponentProps, FunctionComponent } from 'react'
import { Icon } from '@mdi/react'

const mdiSvgPath =
  'M6.79289 1.5H17.2071L22.5 6.79289V17.2071L17.2071 22.5H6.79289L1.5 17.2071V6.79289L6.79289 1.5Z' +
  'M16.5 2.5H7.5V6.5H16.5V2.5Z' +
  'M17.5 3.20711L21.5 7.20711V10.7929L17.5 6.79289V3.20711Z' +
  'M13.9189 7.5H7.5V9.63962L13.9189 7.5Z' +
  'M6.5 9.97295V8.20711L3.85123 10.8559L6.5 9.97295Z' +
  'M2.5 10.7929L6.5 6.79289V3.20711L2.5 7.20711V10.7929Z' +
  'M2.5 13.2071V16.7929L6.5 20.7929V17.2071L2.5 13.2071Z' +
  'M7.5 17.3604V21.5H16.7929L21.2929 17L18.115 13.8221L7.5 17.3604Z' +
  'M19.1756 13.4685L21.5 15.7929V12.6937L19.1756 13.4685Z' +
  'M21.0744 11.7815L7.13505 16.4279L2.92561 12.2185L16.865 7.57206L21.0744 11.7815Z'

interface Props extends Omit<ComponentProps<typeof Icon>, 'path'> {}

export const LogoMdiIcon: FunctionComponent<Props> = ({
  ...props
}) => (
  <Icon
    style={{
      fillRule: 'evenodd'
    }}
    path={mdiSvgPath}
    {...props}
  />
)
