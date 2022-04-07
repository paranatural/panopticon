import React, { FunctionComponent } from 'react'

import { stitches } from 'src/shared/ui'

import { ColorblindModeSwitch } from 'src/entities/colorblind-mode'
import { ColorThemeSwitch } from 'src/entities/color-theme'

interface Props {
  className?: string
}

const Panel = stitches.styled('div', {})
const Section = stitches.styled('div', {})
const Point = stitches.styled('div', {})

export const OptionsPanel: FunctionComponent<Props> = ({
  className,
}) => (
  <Panel className={className}>
    <Section>
      <Point>navigation-panel-switch</Point>
    </Section>
    <Section>
      <Point>
        <ColorblindModeSwitch />
      </Point>
      <Point>
        <ColorThemeSwitch />
      </Point>
      <Point>
        screenshot
      </Point>
      <Point>
        fullscreen-toggle
      </Point>
    </Section>
    <Section>
      <Point>
        props-panel-switch
      </Point>
    </Section>
  </Panel>
)
