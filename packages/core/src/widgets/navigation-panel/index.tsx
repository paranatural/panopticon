import React, { FunctionComponent } from 'react'
import { Icon } from '@mdi/react'
import { mdiCubeOutline } from '@mdi/js'

import { ScrollablePanel, stitches } from 'src/shared/ui'

import { Exhibit } from 'src/entities/exhibit'

import { Point } from './point'
import { AboutPoint } from './about-point'
import { SearchBarPoint } from './search-bar-point'
import { SettingsPoint } from './settings-point'
import { ShortcutsPoint } from './shortcuts-point'

const Container = stitches.styled('div', {
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',

  '& > *:not(:first-child)': {
    borderTop: '1px solid red',
  }
})

interface Props {
  exhibits?: Array<Exhibit>
}

export const NavigationPanel: FunctionComponent<Props> = ({
  exhibits = [],
}) => {
  return (
    <Container>
      <SearchBarPoint />
      <ScrollablePanel>
        {exhibits.map(story => (
          <Point
            key={story.name}
            icon={<Icon path={mdiCubeOutline} size="24px" />}
            label={story.name || story.component.displayName}
          />
        ))}
      </ScrollablePanel>
      <ShortcutsPoint />
      <SettingsPoint />
      <AboutPoint />
    </Container>
  )
}
