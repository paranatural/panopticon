import { ReactNode } from 'react'

export interface Action {
  icon?: ReactNode
  title: string
  onActivate?: () => void
}
