import React, { ComponentProps, FunctionComponent, ReactNode } from 'react'
import { stitches } from 'src/shared/ui'

const Container = stitches.styled('div', {
  height: '32px',
  padding: '4px',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
})

const IconWrapper = stitches.styled('div', {
  width: '24px',
  height: '24px',
})

const LabelWrapper = stitches.styled('div', {
  flex: '1 0 auto',
})

interface Props extends ComponentProps<typeof Container> {
  icon: ReactNode,
  label: ReactNode,
}

export const Point: FunctionComponent<Props> = ({
  icon,
  label,
  ...props
}) => (
  <Container {...props}>
    <IconWrapper>{icon}</IconWrapper>
    <LabelWrapper>{label}</LabelWrapper>
  </Container>
)
