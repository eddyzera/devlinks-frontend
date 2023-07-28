import React from 'react'
import * as Label from '@radix-ui/react-label'
import { IInputLabelProps } from './types'

export const InputLabel: React.FunctionComponent<IInputLabelProps> = ({
  label,
  className,
  idHtmlFor,
  ...props
}) => {
  return (
    <Label.Root htmlFor={idHtmlFor} className={`${className}`} {...props}>
      {label}
    </Label.Root>
  )
}
