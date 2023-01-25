import React, { useState } from 'react'
import "./Contact.css"

const Contact = () => {

 const [name , setName] = useState("")
 const [mail , setMail] = useState("")
 const [message , setMessage] = useState("")

 let submitForm = () => {
   setName("")
   setMail("")
   setMessage("")
 }

  return (
     <>
        <div name="contact" className='main-contact h-full'>
          <div className='max-w-screen-lg mx-auto p-4 my-exp contact'>

             <div className='pb-8'>
                <p className='contact-text '>Contact</p>
                <p className='text-xl py-6'>Submit the form below to get in touch with me.</p>
             </div>

             <div className='flex flex-col justify-center items-center'>

                 <form action='https://getform.io/f/575f1129-963b-42d9-a55d-3ee5d35235a3'
                  method='POST' className='md:w-1/2 w-full form'>
                     
                      <input type="text" required onChange={(e)=> setName(e.target.value)} name="name" placeholder='Enter your name'
                       className='p-2' value={name}/>

                       <input type="mail" required onChange={(e) => setMail(e.target.value)} name="mail" placeholder='Enter your email'
                       className='p-2 my-4' autoComplete="off" value={mail}/>

                       <textarea name="message" required onChange={(e) => setMessage(e.target.value)} rows="10" className='p-2' 
                       placeholder='Write your message here' value={message}></textarea>

                       <button onClick={submitForm} className='w-fit my-8 mx-auto contact-btn'>Send Message</button>
                 </form>
             </div>

          </div>
        </div>
     </>
  )
}

export default Contact
