import { createApi, createStore } from 'effector'

import { Tab } from './model'

const store = createStore<Tab>(null)
const api = createApi(store, {
  set: (store, payload: Tab) => payload,
})

export const controller = {
  store,
  ...api
}
