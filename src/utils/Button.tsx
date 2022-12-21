import React, { ReactElement } from 'react'

const Button = (props: buttonProps) => {
  return (
    <button type="button" className="btn btn-primary">My BTN</button>
  )
}

export default Button

interface buttonProps {
    children: ReactElement
}