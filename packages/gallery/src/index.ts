import { Plugin } from 'panopticon-types'

import { Gallery } from 'src/pages/gallery'
import { Frame } from 'src/pages/frame'

export const createGallery = (
  plugins: Array<Plugin> = []
) => {
  for (let plugin of plugins) {
    // create actions, hotkeys, options, tabs
  }

  // create exhibits
  // return gallery and frame
  return {
    Gallery,
    Frame
  }
}
