import React, { FunctionComponent } from 'react'
import clsx from 'clsx'

import css from './page-template.module.css'
import { NavigationPanel } from '../navigation-panel'
import { ComponentFrame } from '../component-frame'

interface PageTemplateProps {
  className?: string
}

export const PageTemplate: FunctionComponent<PageTemplateProps> = ({
  className,
}) => (
  <div className={clsx(css.template, className)}>
    <div className={css.logo}>
      Logo
    </div>
    <NavigationPanel />
    <ComponentFrame />
  </div>
)
