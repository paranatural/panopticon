import { Action } from './action'
import { Option } from './option'

export interface Plugin {
  actions?: Array<Action>
  options?: Array<Option>
}
