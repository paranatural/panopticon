import { Exhibit } from 'src/entities/exhibit'

const tabAdhocList = [{
  title: '',
  icon: '',
  component: ''
}]

export type TabAdhoc = 'shortcuts' | 'settings' | 'about'
export type Tab = null | Exhibit | TabAdhoc
