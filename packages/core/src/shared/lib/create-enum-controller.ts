import { createElement, FunctionComponent, ReactNode } from 'react'
import { createStore, createApi } from 'effector'
import { useStore } from 'effector-react'

import { ButtonInvisible } from 'src/shared/ui'

export const createEnumController = <T>(values: Array<{ value: T, icon: ReactNode }>, initialValue: T) => {
  const store = createStore<T>(initialValue)

  const api = createApi(store, {
    set: (store, payload: T) => payload,
    prev: (store) => {
      let index = values.findIndex(v => v.value === store) - 1
      if (index < 0) index += values.length
      return values[index].value
    },
    next: (store) => {
      let index = values.findIndex(v => v.value === store) + 1
      if (index >= values.length) index -= values.length
      return values[index].value
    },
    reset: () => initialValue
  })

  // TSX syntax either breaks inferring in generics or JSX square brackets syntax
  const Switch: FunctionComponent = () => {
    const storeValue = useStore(store)
    const icon = values.find(v => v.value === storeValue)?.icon ?? null

    return (
      createElement(ButtonInvisible, {
        onClick: () => api.next(),
      }, [
        icon,
      ])
    )
  }

  return {
    store,
    ...api,
    Switch,
  }
}
