// A timer which counts down from a specified timer. 

import React, { useEffect, useState } from 'react'

export const Six = () => {

   const[time,setTime] = useState(9);


   useEffect(() => {

   if(time>0){

     const timer = setTimeout(() => {
        
        setTime(time-1);
           
      },1000);
      return () => clearTimeout(timer);
    }

   },)
   

  return (
    <div className='flex justify-center items-center h-screen bg-black'>
        <div className='w-64 p-6 bg-amber-50 flex items-center justify-center'>
        <p className='text-blue-500 font-bold text-lg'>Time Counts : {time}</p>
        </div>
    </div>
  )
}
