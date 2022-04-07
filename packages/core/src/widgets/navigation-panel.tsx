import React, { FunctionComponent } from 'react'

import { Exhibit } from 'src/entities/exhibit'

interface NavigationPanelProps {
  stories?: Array<Exhibit>
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
            {story.name || story.component.displayName}
          </li>
        ))}
      </ul>
    </>
  )
}
