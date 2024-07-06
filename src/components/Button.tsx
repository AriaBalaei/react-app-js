import React, { Children, ReactNode } from 'react'

interface Props{ 
  children: ReactNode;
  color?: string;
  onClick: () => void;
}

const Button = ({children, onClick, color='primary'}: Props) => {
  return (
    <button type="button" className={"btn btn-"+ color} onClick={onClick}>{children}</button>
  )
}
export default Button