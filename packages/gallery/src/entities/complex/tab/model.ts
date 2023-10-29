import { ReactNode } from 'react'

import { Exhibit } from 'panopticon-types'

interface TabBasic {
  _kind: string
}

interface TabExhibit extends TabBasic {
  _kind: 'exhibit',
  exhibit: Exhibit
}

interface TabAdhoc extends TabBasic {
  _kind: 'adhoc'
  icon: ReactNode
  title: string
  component: ReactNode
}

export type Tab = TabExhibit | TabAdhoc
