import React from 'react'
import './button.scss';

type ButtonProps = {
    text: string,
    className ?: string
}

const button = ({text, className}: ButtonProps) => {
  return (
    <div className={className}>
      {text}
    </div>
  )
}

export default button
