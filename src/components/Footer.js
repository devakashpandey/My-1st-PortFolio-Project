import React from 'react'
import "./Footer.css"
import { Link } from 'react-scroll'
import { FaLinkedin } from "react-icons/fa"


const Footer = () => {
  return (
    <>
    <div className='footer px-4'>
        <div className='info'>
    Copyright © 2023 - All Rights Reserved 
    <Link className='myname' to="home" smooth duration={500}>
                   <center>Akash Pandey</center></Link>
                      
        <div className='icon'>
           <a href="https://www.linkedin.com/in/devakashpandey/" target="_blank"><FaLinkedin /></a>
        </div>
        </div>
    </div>

    </>
  )
}

export default Footer
