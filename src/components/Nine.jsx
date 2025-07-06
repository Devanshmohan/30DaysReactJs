import React, { useState } from 'react'

export default function () {

const [color,setColor] = useState('black');

  return (
    <div className='h-screen  flex items-center flex-col justify-between bottom-40 duration-300' style={{backgroundColor:color}}>
      <div></div>
        <div className='bg-white rounded m-20 w-fit'>
            <button className='bg-red-500 p-2 m-2 text-white rounded' onClick={()=>setColor('red')}>Red</button>
            <button className='bg-black p-2 m-2 text-white rounded' onClick={()=>setColor('black')}>Black</button>
            <button className='bg-cyan-400 p-2 m-2 text-white rounded' onClick={()=>setColor('cyan')}>Cyan</button>
            <button className='bg-pink-400 p-2 m-2 text-white rounded' onClick={()=>setColor('pink')}>Pink</button>
            <button className='bg-gray-400 p-2 m-2 text-white rounded' onClick={()=>setColor('gray')}>Gray</button>
            <button className='bg-orange-400 p-2 m-2 text-white rounded' onClick={()=>setColor('orange')}>Orange</button>
          
        </div>
    </div>
  )
}
