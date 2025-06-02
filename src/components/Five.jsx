// basic toggle button 

import React, { useState } from 'react'

const Five = () => {

    const[isToggle, setIsToggle] = useState(false);
    const toggle =()=>{
      setIsToggle(!isToggle);
    }

  return (
    <div className='flex items-center justify-center h-screen'>
      <input 
      className='scale-200 '
      onChange={toggle} type="checkbox" />
      <h1 className='font-bold mx-2'>{isToggle ? "ON" : "OFF"}</h1>
    </div>
  )
}

export default Five


