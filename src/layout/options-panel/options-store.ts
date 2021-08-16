import { createStore, combine, createApi } from 'effector'

const visionValues = ['normal', 'protanopia', 'deuteranopia'] as const
type Vision = typeof visionValues[number]
const visionStore = createStore<Vision>('normal')
export const {
  visionSet,
  visionToggle,
} = createApi(visionStore, {
  visionSet: (store, payload: Vision) => payload,
  visionToggle: store => visionValues[visionValues.indexOf(store) + 1] ?? visionValues[0]
})

const themeValues = ['light', 'dark', 'amoled'] as const
type Theme = typeof themeValues[number]
const themeStore = createStore<Theme>('light')
export const {
  themeSet,
  themeToggle,
} = createApi(themeStore, {
  themeSet: (store, payload: Theme) => payload,
  themeToggle: store => themeValues[themeValues.indexOf(store) + 1] ?? themeValues[0]
})

export const optionsStore = combine({
  vision: visionStore,
  theme: themeStore,
})
