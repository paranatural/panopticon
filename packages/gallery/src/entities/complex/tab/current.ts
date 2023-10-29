import { createApi, createStore } from 'effector'

import { Tab } from './model'

const store = createStore<Tab | null>(null)
const api = createApi(store, {})

export const current = {
  store,
  ...api,
}
