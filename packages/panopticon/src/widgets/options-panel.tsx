import React, { FunctionComponent } from 'react'

import { stitches } from 'src/shared/ui'

import { screenshot } from 'src/features/screenshot'

import { colorblindMode } from 'src/entities/colorblind-mode'
import { colorTheme } from 'src/entities/color-theme'
import { knobsPosition } from 'src/entities/knobs-position'
import { fullscreenMode } from 'src/entities/fullscreen-mode'
import { navigationPosition } from 'src/entities/navigation-position'

interface Props {
  className?: string
}

const Panel = stitches.styled('div', {
  height: '32px',
  flex: '0 0 32px',
  display: 'flex',
  justifyContent: 'space-between',
})

const Section = stitches.styled('div', {
  display: 'flex',
})

const Point = stitches.styled('div', {
  width: '32px',
  height: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const OptionsPanel: FunctionComponent<Props> = ({
  className,
}) => (
  <Panel className={className}>
    <Section>
      <Point><navigationPosition.Switch /></Point>
    </Section>
    <Section>
      <Point><colorblindMode.Switch /></Point>
      <Point><colorTheme.Switch /></Point>
      <Point><screenshot.Button /></Point>
      <Point><fullscreenMode.Switch /></Point>
    </Section>
    <Section>
      <Point><knobsPosition.Switch /></Point>
    </Section>
  </Panel>
)
