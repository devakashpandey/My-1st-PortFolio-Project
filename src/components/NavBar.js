import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import "./Nav.css";
import { Link } from 'react-scroll';

const NavBar = () => {

  const [toggle, setToggle] = useState()

  return (
      <>
      <div className='main-nav'>
        <div>
           <h1 className='my-name font-sign'>Akash</h1>
        </div>

    {/* menu for big screen  */}

    <ul className='hidden md:flex text-gray-400'>  {/* hidden => hide the menu when toggle come */}
      <li 
      className='px-4 cursor-pointer hover:scale-110 font-medium
       duration-200'>
        <Link to="home" smooth duration={500} >Home</Link>
      </li>
      <li 
      className='px-4 cursor-pointer hover:scale-110 font-medium
       duration-200'>
        <Link to="about" smooth duration={500} >About</Link>
      </li>
      <li 
      className='px-4 cursor-pointer hover:scale-110 font-medium
       duration-200'>
        <Link to="portfolio" smooth duration={500} >Portfolio</Link>
      </li>
      <li 
      className='px-4 cursor-pointer hover:scale-110 font-medium
       duration-200'>
        <Link to="skills" smooth duration={500} >Skills</Link>
      </li>
      <li 
      className='px-4 cursor-pointer hover:scale-110 font-medium
       duration-200'>
        <Link to="contact" smooth duration={500} >Contact</Link>
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
                       className='py-4 cursor-pointer mobile-li'>
                        <Link onClick={() => setToggle(!toggle)} to="home" smooth duration={500} >Home</Link>
                       </li>
                       <li 
                       className='py-4 cursor-pointer mobile-li'>
                        <Link onClick={() => setToggle(!toggle)} to="about" smooth duration={500} >About</Link>
                       </li>
                       <li 
                       className='py-4 cursor-pointer mobile-li'>
                        <Link onClick={() => setToggle(!toggle)} to="portfolio" smooth duration={500} >Portfolio</Link>
                       </li>
                       <li 
                       className='py-4 cursor-pointer mobile-li'>
                        <Link onClick={() => setToggle(!toggle)} to="skills" smooth duration={500} >Skills</Link>
                       </li>
                       <li 
                       className='py-4 cursor-pointer mobile-li'>
                        <Link onClick={() => setToggle(!toggle)} to="contact" smooth duration={500} >Contact</Link>
                       </li>
                 
                     </ul>
               )
          }

 


       </div>
      </>
  )
}

export default NavBar;
