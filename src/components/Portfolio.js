import React from 'react'
import "./Portfolio.css"
import PortCard from './PortCard';

function Portfolio() {
  return (
   <>
      <div name="portfolio" className='main-portfolio'>
 
        <div className='max-w-screen-lg p-4 mx-auto port2'>
          <div className='pb-8 '>
            <p className='port-p'>PortFolio</p>
            <p className='py-6 text-xl'>Check out some of my work right here. </p>
          </div>

    {/* portfolio card start !!*/}

    <PortCard />

    {/* portfolio card end !!!*/}

      </div>

    </div>
   </>
  )
}

export default Portfolio;
