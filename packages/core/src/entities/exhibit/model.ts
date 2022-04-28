import { ComponentType } from 'react'

import { Knob } from 'src/entities/knob'

export interface Exhibit<Props extends {} = {}> {
  name?: string;
  description?: string;
  component: ComponentType<Props>;
  props: { [key in keyof Props]: Knob<Props[key]> };
}
