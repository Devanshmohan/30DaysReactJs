import React, { useState } from 'react'

export const Twelve = () => {

    const[file,setFile] = useState(null);

    const handleFileChange =(e)=>{
         const selectedFile = e.target.files[0];
         setFile(selectedFile);
    }
  return (
    <div>
    <div>
        <input type="file" onChange={handleFileChange} className='rounded border-2 border-blue-500' />
    </div>
    <div className='w-full h-48'>
        {file && <img src={URL.createObjectURL(file)} alt='Uploaded' className="w-full h-full object-contain"></img>}
    </div>
    </div>
  )
}
