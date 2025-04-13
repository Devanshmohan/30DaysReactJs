// Component to display a list of items

import React from 'react'




const Four = () => {
    const items = ['item1', 'item2', 'item3', 'item4', 'item5'];
  return (
    <div className='flex justify-center items-center h-screen bg-blue-500'>
    <div className='bg-blue-400 w-md flex items-center justify-center p-2'>
    <ul>
      {items.map((item, index)=>{
        return <li className='font-bold' key={index}>{item}</li>
      })}
  </ul>
  </div>
  </div>
  )
}

export default Four
