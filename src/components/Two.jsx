
// Counter Application with Increment and Decrement Butttons

import React, { useState } from 'react'

const Two = () => {
    const[value, setValue] = useState(0);

  return (
    <div className='flex justify-center items-center h-screen'>
      <button 
      disabled = {value===0}
      className={ `rounded-2xl text-lg font-bold mx-2  ${value ===0 ? 'bg-gray-400 px-6 py-2 cursor-not-allowed' : 'bg-red-500 px-6 py-2 cursor-pointer'}`}  onClick={()=>setValue(value-1)}>-</button>
      {value}
      <button className='rounded-2xl bg-blue-500 px-6 py-2 text-lg font-bold mx-2' onClick={()=>setValue(value+1)}>+</button>
    </div>
  )
}

export default Two
