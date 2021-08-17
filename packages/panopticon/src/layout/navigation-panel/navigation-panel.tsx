import React, { FunctionComponent } from 'react'

import { Story } from 'src/lib/types'

interface NavigationPanelProps {
  stories?: Array<Story>;
}

export const NavigationPanel: FunctionComponent<NavigationPanelProps> = ({
  stories = [],
}) => {
  return (
    <>
      <input type="search" placeholder="search" />
      <ul>
        {stories.map(story => (
          <li>
            {story.name || story.settings.name || story.settings.component.displayName}
          </li>
        ))}
      </ul>
    </>
  )
}
