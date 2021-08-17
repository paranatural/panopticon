import { FunctionComponent } from 'react'
import clsx from 'clsx'
import { useStore } from 'effector-react'
import { mdiEye } from '@mdi/js'
import { Icon } from '@mdi/react'

import { optionsStore } from './options-store'

import css from './options-panel.module.css'

interface OptionsPanelProps {
  className?: string
}

export const OptionsPanel: FunctionComponent<OptionsPanelProps> = ({
  className
}) => {
  const options = useStore(optionsStore)

  return (
    <div className={clsx(css.panel, className)}>
      <div className={css.section}>
        <div className={css.point}>navigation-panel-switch</div>
      </div>
      <div className={css.section}>
        <div className={css.point}>
          <Icon
            path={mdiEye}
            color={({
              normal: 'white',
              protanopia: 'green',
              deuteranopia: 'blue',
            })[options.vision]}
          />
        </div>
        <div className={css.point}>
          theme
        </div>
        <div className={css.point}>
          screenshot
        </div>
        <div className={css.point}>
          fullscreen-toggle
        </div>
      </div>
      <div className={css.section}>
        <div className={css.point}>
          props-panel-switch
        </div>
      </div>
    </div>
  )
}
