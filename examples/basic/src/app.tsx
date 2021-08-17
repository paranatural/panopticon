import React from 'react'
import ReactDOM from 'react-dom'
import { Panopticon } from 'panopticon'

import { buttonStory } from './button.story'

const PanopticonPage = () => (
  <Panopticon
    stories={[
      buttonStory
    ]}
  />
)

ReactDOM.render(
  <PanopticonPage />,
  document.querySelector('#react'),
)
