

import { Link } from "react-router-dom"
export const Navbar = () => {
  return (
  <>
  
  <div className="h-16 bg-black text-white flex items-center justify-center">
    <ul className=" flex justify-around space-x-20 text-2xl">
        <li className="cursor-pointer"><Link to= "/">Home</Link></li>
        <li className="cursor-pointer"><Link to= "/about">About</Link></li>
        <li className="cursor-pointer"><Link to= "/contact">Contact Us</Link></li>
  
    </ul>
  </div>
 
  </>
  )
}
