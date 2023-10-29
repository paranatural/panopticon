import { createApi, createStore } from 'effector'

import { Tab } from './model'

const store = createStore<Array<Tab>>([])
const api = createApi(store, {
  add: (store, payload: Tab) => [...store, payload],
})

export const list = {
  store,
  ...api,
}
