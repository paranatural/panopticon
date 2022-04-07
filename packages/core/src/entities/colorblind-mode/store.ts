import { createApi, createStore } from 'effector'

const values = ['normal', 'protanopia', 'deuteranopia'] as const

type Value = typeof values[number]

const store = createStore<Value>('normal')
const {
  set,
  toggle,
} = createApi(store, {
  set: (store, payload: Value) => payload,
  toggle: store => values[values.indexOf(store) + 1] ?? values[0]
})

export const colorblindMode = {
  values,
  store,
  set,
  toggle,
}

export type ColorblindMode = Value
