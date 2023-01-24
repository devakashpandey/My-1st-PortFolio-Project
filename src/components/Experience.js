import React from 'react'
import "./Experience.css"
import html from "../assets/html.png"
import css from "../assets/css.png"
import bootstrap from "../assets/bootstrap.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import firebase from "../assets/firebase.png"



const Experience = () => {
  return (
     <>
      <div name="experience" className='main-experience'>
        <div className='max-w-screen-lg mx-auto p-4 my-exp'>

            <p className='exp-text'>Experience</p>
            <p className='text-xl py-6'>These are the technologies i have worked with.</p> 
          
          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 
           text-center py-8 px-12 sm:px-0'>

            <div className="exp-img py-2 html">
              <img src={html} alt="html" className='w-20 mx-auto py-2'></img>
              <p className='mt-4'>HTML</p>
            </div>

            <div className="exp-img py-2 css">
              <img src={css} alt="html" className='w-20 mx-auto py-2'></img>
              <p className='mt-4'>CSS</p>
            </div>

            <div className="exp-img py-2 bootstrap">
              <img src={bootstrap} alt="html" className='w-20 mx-auto py-3'></img>
              <p className='mt-4'>BOOTSTRAP</p>
            </div>

            <div className="exp-img py-2 javascript">
              <img src={javascript} alt="html" className='w-20 mx-auto py-2'></img>
              <p className='mt-4'>JAVASCRIPT</p>
            </div>

            <div className="exp-img py-2 react">
              <img src={reactImage} alt="html" className='w-20 mx-auto py-2'></img>
              <p className='mt-4'>REACT</p>
            </div>

            <div className="exp-img py-2 github">
              <img src={github} alt="html" className='w-20 mx-auto py-2'></img>
              <p className='mt-4'>GITHUB</p>
            </div>

            <div className="exp-img py-2 tailwind">
              <img src={tailwind} alt="html" className='w-20 mx-auto py-3'></img>
              <p className='mt-4'>TAILWIND</p>
            </div>

            <div className="exp-img py-2 firebase">
              <img src={firebase} alt="html" className='w-20 mx-auto py-2'></img>
              <p className='mt-4'>FIREBASE</p>
            </div>

          </div>

        </div>
      </div>
     </>
  )
}

export default Experience;
