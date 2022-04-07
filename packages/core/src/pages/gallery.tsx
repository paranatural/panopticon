import React, { FunctionComponent } from 'react'

import { stitches, LogoIcon, Surface } from 'src/shared/ui'

import { Exhibit } from 'src/entities/exhibit'

import { NavigationPanel } from 'src/widgets/navigation-panel'
import { ComponentFrame } from 'src/widgets/component-frame'

import 'src/shared/ui/global-styles'

const Container = stitches.styled('div', {
  height: '100%',
  overflow: 'hidden',

  padding: '$large',

  display: 'flex',
  gap: '$large',
})

const Sidebar = stitches.styled(Surface, {
  flex: '0 1 320px',

  display: 'flex',
  flexDirection: 'column',
})

const LogoWrapper = stitches.styled('div', {
  flex: '0 0 40px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const Content = stitches.styled(Surface, {
  flex: '1 1 480px',
})

interface Props {
  exhibits: Array<Exhibit>
}

export const Gallery: FunctionComponent<Props> = () => (
  <Container>
    <Sidebar>
      <LogoWrapper><LogoIcon size="32px" /></LogoWrapper>
      <NavigationPanel />
    </Sidebar>
    <Content>
      <ComponentFrame />
    </Content>
  </Container>
)
