// A component that fetches data from API and displays it

import { useEffect, useState } from "react"


export const Seven = () => {

  const [data,setData] = useState([]);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>res.json())
    .then((data)=>setData(data.slice(0,10)));
},[])
console.log(data);
  return (
    <div>
         <ul>
        {data.map((item)=>(
        
        <li key={item.id}>{item.title}</li>  
))}
</ul>

    </div>
  )
}


