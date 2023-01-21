import React from 'react'
import {FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import "./SocialLinks.css"

const SocialLinks = () => {
  return (
     <>
     <div className='social'>
          <ul>
              <li className='px-4 social-li ml-[-100px]'>
                      <a href="#" className='w-full social-link'>
                        <>LinkedIn <FaLinkedin size={28}/> </>
                      </a>
              </li>
          </ul>            
     </div>
     </>
  )
}

export default SocialLinks;
