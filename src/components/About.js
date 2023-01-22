import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
    
     <div name="about" className='w-full h-screen main-about'>
        <div className='max-w-screen-lg p-4 mx-auto about-descrip'>

         <div className='pb-8'>
          <p className='about-txt'>About</p>
         </div>    

        <p className='text-xl mt-10'>
          Hey!,<br/> <br/>
          My self Akash Pandey from Bihar, IN.
          A Front-End Developer with experience of 1 year and 
         on the way of learning MERN Stack Development.
         I love to work web application using
         technologies like Javascript, React, Bootstrap, Redux and Firebase.
          Gaining More Knowledge From Any Platform Is Topmost Priority,
          
        </p>

        <br/>

        <p className='text-xl'>
         I love web Designing & programming, as well as, taking photos and learning new things. 
         I mostly use Html, Css, javascript, Bootstrap, React, Firebase to 
         create small or big projects. Feel free to get in touch or take a look at my past work below.
        </p>

     </div>
     </div>

    </>
  )
}

export default About;
