import React from 'react'

interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

export const FormRoot: React.FunctionComponent<IFormProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <form className={`${className}`} {...props}>
      {children}
    </form>
  )
}
