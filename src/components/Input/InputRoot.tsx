import React from 'react'
import { IInputRootProps } from './types'

export const InputRoot: React.FunctionComponent<IInputRootProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  )
}
