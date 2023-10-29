import { createApi, createStore } from 'effector'

import { Option } from './model'

const store = createStore<Array<Option>>([])
const api = createApi(store, {
  add: (store, payload: Option) => [...store, payload],
})

export const list = {
  store,
  ...api,
}
