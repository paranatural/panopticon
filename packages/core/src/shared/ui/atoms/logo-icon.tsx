import React, { ComponentProps, FunctionComponent } from 'react'
import Icon from '@mdi/react'

const mdiSvgPath =
  'M2 7V17L7 22H17L22 17V7L17 2H7Z' +
  'M2 12L7 7H17L22 12' +
  'M2 17L7 12H17L22 17' +
  'M7 2V12' +
  'M17 2V12'

interface Props extends Omit<ComponentProps<typeof Icon>, 'path'> {}

export const LogoIcon: FunctionComponent<Props> = ({
  ...props
}) => (
  <Icon
    color="transparent"
    style={{
      strokeWidth: '1.5px',
      stroke: 'currentColor'
    }}
    path={mdiSvgPath}
    {...props}
  />
)
