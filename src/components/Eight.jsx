// Todo list component with add and delete functionality

import React, { useState } from 'react'

export const Eight = () => {

 const [items,setItems] = useState([]);
 const [input,setInput] = useState('');


 const addItem =(e)=>{
     if(input.trim()!==""){
      setItems([...items,input]);
      setInput('');
     }
 }

const deleteItem =(index)=>{
        const newItems = items.filter((_,i)=>i!==index);
        setItems(newItems); 
}

const handleKeyPress = (e) =>{
  if(e.key === 'Enter'){
    addItem();
  }
}

  return (
    <>
    <div className='h-screen w-screen flex items-center justify-center bg-amber-50 '>
    <div className=' bg-amber-100 p-4 rounded'>
      <div className='flex space-x-2 mb-4'>
      <input type="text"
      value={input}
       placeholder='Enter todo' 
       className='border-2 border-blue-400 p-2 bg-white rounded w-64'
       onChange={(e)=>setInput(e.target.value)}
       onKeyDown={handleKeyPress} />
      <button className='cursor-pointer bg-blue-500 p-2 m-2 rounded text-white w-16'onClick={addItem}>Add</button>
      </div>
     
      <ul>
        {items.map((item,index)=>(
       
         <div className='flex flex-row'>
          <li key={index} className='mx-1 my-2 p-2 break-words overflow-hidden rounded bg-white w-64'>{item}</li>
          <button className='cursor-pointer bg-red-500 p-2 m-2 rounded text-white h-11'
          onClick={()=>deleteItem(index)}
          >Delete</button>
          </div>
    
          
        ))}
      </ul>
      
      </div>
      </div>
    </>
  )
}
