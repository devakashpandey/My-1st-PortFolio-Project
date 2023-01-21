import React from 'react'
import {BiRightArrowCircle} from "react-icons/bi" 
import Akash from "../assets/akash.jpg"

const Home = () => {
  return (
     <>
      <div name="home" className='h-screen w-full bg-neutral-800'>
                      
         <div className='max-w-screen-lg mx-auto flex flex-col items-center
                          justify-center h-full px-4 md:flex-row'>
           <div>
             <h2>I Am Full Stack Developer</h2>
             <p>I have 1 year of experience buldin and designing
                 websites. Currently, I love to work web application
                 using technologies like React, Bootstrap , Redux and Firebase
             </p>

           <div>
              <button>Portfolio <span><BiRightArrowCircle/></span></button>
           </div>

           </div>


          <div>
           <img src={Akash} alt="my profile" className='rounded-2xl mx-auto'
                                 width="300px" height="200px" />
          </div>

         </div>
      </div>
     </>
  )
}

export default Home;
