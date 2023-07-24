import React from 'react'

interface ICardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export const CardRoot: React.FunctionComponent<ICardProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={`bg-white p-10 rounded-s-radius-md ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
