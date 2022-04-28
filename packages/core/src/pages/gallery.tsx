import React, { FunctionComponent } from 'react'
import { useStore } from 'effector-react'

import { stitches, DoubleResizableVertical, TripleResizableHorizontal } from 'src/shared/ui'
import 'src/shared/ui/global-styles'

import { Exhibit } from 'src/entities/exhibit'
import { navigationPosition } from 'src/entities/navigation-position'

import { NavigationPanel } from 'src/widgets/navigation-panel'
import { ComponentFrame } from 'src/widgets/component-frame'
import { OptionsPanel } from 'src/widgets/options-panel'
import { KnobsPanel } from 'src/widgets/knobs-panel'
import { knobsPosition } from 'src/entities/knobs-position'
import { Logo } from 'src/widgets/logo'

const ComponentFrameStyled = stitches.styled(ComponentFrame, {
  flex: '1 0 auto',
})

const FlexColumnDivided = stitches.styled('div', {
  width: '100%',
  height: '100%',
  flex: '1 1 auto',

  display: 'flex',
  flexDirection: 'column',

  '& > *:not(:first-child)': {
    borderTop: '1px solid yellowgreen'
  }
})

interface Props {
  logo?: string
  exhibits: Array<Exhibit>
}

export const Gallery: FunctionComponent<Props> = ({
  logo,
  exhibits,
}) => {
  const knobsPositionValue = useStore(knobsPosition.store)
  const navigationPositionValue = useStore(navigationPosition.store)

  return (
    <TripleResizableHorizontal
      slotLeft={navigationPositionValue === 'left' && (
        <FlexColumnDivided>
          <Logo src={logo} />
          <NavigationPanel
            exhibits={exhibits}
          />
        </FlexColumnDivided>
      )}
      slotMiddle={
        <FlexColumnDivided>
          <OptionsPanel />
          <DoubleResizableVertical
            top={<ComponentFrameStyled />}
            bottom={knobsPositionValue === 'bottom' && (
              <KnobsPanel />
            )}
          />
        </FlexColumnDivided>
      }
      slotRight={knobsPositionValue === 'right' && (
        <KnobsPanel />
      )}
    />
  )
}
