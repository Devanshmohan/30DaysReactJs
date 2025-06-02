import React, { useEffect, useLayoutEffect, useState } from 'react'

export const Seven = () => {
    const[data, setData] = useState([]);

    useEffect(() => {
     fetch("https://jsonplaceholder.typicode.com/photos")
     .then((response)=>response.json())
     .then((info)=>setData(info))
    }, [])
    

   
  return (
    <div>
   {
    data ? (<ul>
        {data.map((item, index)=>{
           return <li key={index}><p>{item.title}</p>
            <img  src={item.url} alt="" />
           </li>
})}
    </ul>) :
    (<p>Loading....</p>)
   }
    </div>
  )
}
