import { ComponentType } from 'react'

export type Knob<T> = ComponentType<{
  defaultValue: T
  value: T
  onChange: (value: T) => void

  className?: string

  ref?: never
  children?: never
}>
