import { ComponentProps, ComponentType } from 'react'

export type Knob<T> = ComponentType<{
  onChange: (value: T) => void;
  defaultValue: T;
}>

export interface StorySettings<C extends ComponentType> {
  name?: string;
  component: C;
  defaultProps: ComponentProps<C>;
  knobs: { [key in keyof ComponentProps<C>]: Knob<ComponentProps<C>[key]> };
}

export interface Story<C extends ComponentType = ComponentType> {
  name?: string;
  description?: string;
  settings: StorySettings<C>;
  defaultProps: Partial<ComponentProps<C>>;
}
