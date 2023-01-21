import React from 'react'
import {FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsInstagram } from "react-icons/bs"
import "./SocialLinks.css"

const SocialLinks = () => {
  return (
     <>
     <div className='social'>
          <ul>
              <li className='px-4 social-li'>
                      <a href="https://github.com/devakashpandey" target="_github" className='w-full social-link'>
                        <>GitHub <FaGithub size={28}/> </>
                      </a>
              </li>
              <li className='px-4 social-li'>
                      <a href="https://www.linkedin.com/in/devakashpandey/" target="_linkedin" className='w-full social-link'>
                        <>LinkedIn <FaLinkedin size={28}/> </>
                      </a>
              </li>
              <li className='px-4 social-li'>
                      <a href="mailto:developerakky@gmail,com" target="_mail" className='w-full social-link'>
                        <>Mail <HiOutlineMail size={28}/> </>
                      </a>
              </li>
              <li className='px-4 social-li'>
                      <a href="https://www.instagram.com/codingwithakash" target="_instagram" className='w-full social-link resume'>
                        <>Instagram <BsInstagram size={28}/> </>
                      </a> 
              </li>
          </ul>            
     </div>
     </>
  )
}

export default SocialLinks;
