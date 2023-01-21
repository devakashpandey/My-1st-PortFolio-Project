import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import "./Nav.css";

const NavBar = () => {

  const [toggle, setToggle] = useState()

  return (
      <>
      <div className='main-nav'>
        <div>
           <h1 className='text-5xl font-sign'>Akash</h1>
        </div>

    {/* menu for big screen  */}

    <ul className='hidden md:flex text-gray-400'>  {/* hidden => hide the menu when toggle come */}
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

    <div onClick={() => setToggle(!toggle)} className='cursor-pointer pr-4 z-10 md:hidden'>
          {toggle ? <FaTimes size={32}/> : <FaBars size={32}/>}
    </div>



       {/* menu for mobile section  */}

       { toggle && (
                      <ul className='flex flex-col justify-center items-center absolute top-0
                      left-0 w-full h-screen bg-black text-3xl text-gray-400'>
                   
                       <li 
                       className='py-4 cursor-pointer'>Home
                       </li>
                       <li 
                       className='py-4 cursor-pointer'>About
                       </li>
                       <li 
                       className='py-4 cursor-pointer'>Skills
                       </li>
                       <li 
                       className='py-4 cursor-pointer'>Portfolio
                       </li>
                       <li 
                       className='py-4 cursor-pointer'>Contact
                       </li>
                 
                     </ul>
               )
          }

 


       </div>
      </>
  )
}

export default NavBar;
