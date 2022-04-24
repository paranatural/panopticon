import React from 'react'
import ReactDOM from 'react-dom'
import { Gallery } from 'panopticon-core'

import 'modern-css-reset'

import { buttonExhibit } from './button.exhibit'

const PanopticonPage = () => (
  <Gallery
    exhibits={[
      buttonExhibit
    ]}
  />
)

ReactDOM.render(
  <PanopticonPage />,
  document.querySelector('#root'),
)
