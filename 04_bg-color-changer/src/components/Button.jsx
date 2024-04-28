import React from 'react'

const Button = ({ btnName = "btn-name" , style}) => {
  return (
    <button type="button" className='outline-none px-4 py-1 rounded-full' style>
      {btnName} 
    </button>
  )
}

export default Button
