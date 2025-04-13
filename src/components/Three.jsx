<<<<<<< HEAD
// A form that takes user input and displays it in real time

import React, { useState } from 'react'

const Three = () => {
    const [data,setData] = useState("");
    const dataChange = (e) =>{
        setData(e.target.value);
    }
  return (
    
    <div className='flex justify-center items-center h-screen bg-[#081b29]'>
        <div className='flex flex-col items-center border-2  max-w-md w-full p-8 bg-yellow-50 rounded-2xl'>
      <input className='border-black border-2 p-4 rounded-2xl mb-4' onChange={dataChange} placeholder='Enter text' type="text" />

    <p className='mx-2 break-words w-full text-2xl'>User Input : {data}</p>
    </div>
    </div>
          
  )
}

export default Three
=======
// A form that takes user input and displays it in real time

import React, { useState } from 'react'

const Three = () => {
    const [data,setData] = useState("");
    const dataChange = (e) =>{
        setData(e.target.value);
    }
  return (
    
    <div className='flex justify-center items-center h-screen bg-[#081b29]'>
        <div className='flex flex-col items-center border-2  max-w-md w-full p-8 bg-yellow-50 rounded-2xl'>
      <input className='border-black border-2 p-4 rounded-2xl mb-4' onChange={dataChange} placeholder='Enter text' type="text" />

    <p className='mx-2 break-words w-full text-2xl'>User Input : {data}</p>
    </div>
    </div>
          
  )
}

export default Three
>>>>>>> 7a9f259d32ac5ee6e5c4dbb413600d03410b453d
