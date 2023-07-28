import React from 'react'

export interface IInputRootProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export interface IInputLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label: string
}
