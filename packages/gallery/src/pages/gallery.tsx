import React, { FunctionComponent } from 'react'

import { Exhibit } from 'panopticon-types'

import { splitHorizontal, stitches } from 'src/shared'

import { TabListRenderer } from 'src/widgets/tab-list-renderer'
import { TabCurrentRenderer } from 'src/widgets/tab-current-renderer'

const globalStyles = stitches.globalCss({
  'html, body, #root': {
    height: '100%',
  },
  body: {
    backgroundColor: '$pageBack',
    fontFamily: '$paragraph',
    fontSize: '$paragraph',
    fontWeight: '$paragraph',
    color: '$elemDormantFore',
  }
})

globalStyles()

interface Props {
  exhibits: Array<Exhibit>
}

export const Gallery: FunctionComponent<Props> = ({
  exhibits,
}) => (
  <splitHorizontal.Container>
    <splitHorizontal.Left>
      <TabListRenderer />
    </splitHorizontal.Left>
    <splitHorizontal.Right>
      <TabCurrentRenderer />
    </splitHorizontal.Right>
  </splitHorizontal.Container>
)
