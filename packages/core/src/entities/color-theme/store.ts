import { createApi, createStore } from 'effector'

const values = ['light', 'dark', 'amoled'] as const

type Value = typeof values[number]

const store = createStore<Value>('light')
const {
  set,
  toggle,
} = createApi(store, {
  set: (store, payload: Value) => payload,
  toggle: store => values[values.indexOf(store) + 1] ?? values[0]
})

export const colorTheme = {
  values,
  store,
  set,
  toggle,
}

export type ColorTheme = Value
