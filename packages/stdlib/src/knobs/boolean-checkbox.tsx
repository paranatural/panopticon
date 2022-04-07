import React from 'react'

import { Knob } from '@panopticon/core'

export const BooleanCheckbox: Knob<boolean | undefined> = ({
  defaultValue,
  value,
  onChange,
}) => (
  <label>
    <input
      type="checkbox"
      defaultChecked={defaultValue}
      checked={value}
      onChange={event => {
        if (event.currentTarget.checked) onChange(false)
        else onChange(true)
      }}
    />
    {value ? 'true' : 'false'}
  </label>
)
