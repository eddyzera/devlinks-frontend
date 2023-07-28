import React from 'react'
import { IInputLabelProps } from './types'

export const InputLabel: React.FunctionComponent<IInputLabelProps> = ({
  label,
  className,
  ...props
}) => {
  return (
    <label htmlFor="" className={`${className}`} {...props}>
      {label}
    </label>
  )
}
