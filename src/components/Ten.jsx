import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "../routes/Navbar"
import { ContactUs } from "../routes/ContactUs"
import About from "../routes/About"
import { Home } from "../routes/Home"



export const Ten = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path="/" element ={<Home/>} />
       <Route path="/about" element ={<About/>} />
       <Route path="/contact" element ={<ContactUs/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}
