import React from 'react'
import {BiRightArrowCircle} from "react-icons/bi" 
import Akash from "../assets/akash.jpg"
import "./Home.css"
import { Link } from 'react-scroll'

const Home = () => {
  return (
     <> 
      <div name="home" className='home'>
                      
         <div className='max-w-screen-lg mx-auto flex flex-col items-center
                          justify-between h-full px-4 md:flex-row'>

           <div className='flex flex-col justify-center h-full description'>
             <h2 className='text-4xl sm:text-6xl font-bold home-txt '>I Am Front-End Developer</h2>
             <p className='text-gray-400 py-5 about'>I have 1 year of experience bulding and designing
                 websites. Currently, I love to work web application
                 using technologies like Javascript, React, Bootstrap, 
                 Redux and Firebase.
             </p>

           <div>
           <Link to="portfolio" smooth duration={500}>
              <button className='group px-6 py-3 my-2 flex items-center main-btn'>
             Portfolio&nbsp; <span className='group-hover:rotate-90'><BiRightArrowCircle/></span>
              </button>
              </Link>
           </div>

           </div>

          <div>
           <img src={Akash} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-90 pic' />
          </div>

         </div>
      </div>
     </>
  )
}

export default Home;
