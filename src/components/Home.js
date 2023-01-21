import React from 'react'
import {BiRightArrowCircle} from "react-icons/bi" 
import Akash from "../assets/akash.jpg"
import "./Home.css"

const Home = () => {
  return (
     <> 
      <div name="home" className='w-full home'>
                      
         <div className='max-w-screen-lg mx-auto flex flex-col items-center
                          justify-between h-full px-3 md:flex-row w-full'>

           <div className='flex flex-col justify-center h-full'>
             <h2 className='text-4xl sm:text-7xl font-bold '>I Am Front-End Developer</h2>
             <p className='text-gray-400 py-5 about'>I have 1 year of experience bulding and designing
                 websites. Currently, I love to work web application
                 using technologies like Javascript, React, Bootstrap, 
                 Redux and Firebase.
             </p>

           <div>
              <button className='group w-fit px-6 py-3 my-2 flex items-center main-btn'>
                      Portfolio &nbsp; <span className='group-hover:rotate-90'><BiRightArrowCircle/></span>
              </button>
           </div>

           </div>

          <div>
           <img src={Akash} alt="my profile" className='rounded-2xl pic' />
          </div>

         </div>
      </div>
     </>
  )
}

export default Home;
