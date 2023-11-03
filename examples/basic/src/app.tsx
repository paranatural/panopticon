import React, { FunctionComponent } from 'react'
import { createRoot } from 'react-dom/client'
import { Gallery } from '@paranatural/panopticon'

import 'modern-css-reset'

import { buttonExhibit } from './button.exhibit'

const PanopticonPage: FunctionComponent = () => (
  <Gallery
    exhibits={[
      buttonExhibit
    ]}
  />
)

createRoot(document.querySelector('#root')!)
  .render(<PanopticonPage />)
