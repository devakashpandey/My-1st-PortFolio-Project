import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"

const NavBar = () => {

  const [toggle, setToggle] = useState()

  return (
      <>
      <div className='flex justify-between items-center w-full h-20
      px-4 text-white bg-black fixed'>

    <div>
        <h1 className='text-5xl font-sign'>Akash</h1>
    </div>

    <ul className='hidden md:flex'>
      <li 
      className='px-4 cursor-pointer hover:scale-110 font-medium
       duration-200'>Home
      </li>
      <li 
      className='px-4 cursor-pointer hover:scale-110 font-medium
       duration-200'>About
      </li>
      <li 
      className='px-4 cursor-pointer hover:scale-110 font-medium
       duration-200'>Skills
      </li>
      <li 
      className='px-4 cursor-pointer hover:scale-110 font-medium
       duration-200'>Portfolio
      </li>
      <li 
      className='px-4 cursor-pointer hover:scale-110 font-medium
       duration-200'>Contact
      </li>
     
    </ul>

    <div onClick={() => setToggle(!toggle)} className='cursor-pointer pr-4'>
          {toggle ? <FaTimes size={32}/> : <FaBars size={32}/>}
    </div>

       </div>
      </>
  )
}

export default NavBar;
