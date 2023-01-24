import React from 'react'
import "./Portcard.css"
import expenseTracker from "../assets/portfolio/expensetracker.png"
import filterGallery from "../assets/portfolio/filtgal.png"
import tictactoe from "../assets/portfolio/tictactoe.png"
import todoList from "../assets/portfolio/todo.png"
import weatherApp from "../assets/portfolio/weather.png"


const PortCard = () => {

 const portCards = [
    {
      id: 1,
      src: expenseTracker
    },
    {
      id: 2,
      src: filterGallery
    },
    {
      id: 3,
      src: tictactoe
     },
    {
      id: 4,
      src:todoList,
    },
    {
      id: 5,
      src:weatherApp
    }
 ]

  return (
     <>
       {/* portfolio card start !!*/}

      <div className='grid sm:grid-cols-2 md:grid-cols-3 sm:px-0 gap-8 px-12 '>
      
      {
        portCards.map(({id, src}) =>{
            return (
                      <div key={id} className='port-card h-full'>
                         <img src={src} alt=" expenseTracker" className='port-img duration-300'></img>
                      
                         <div className='buttons'>
                           <button>Demo</button>
                           <button>Get Code </button>
                         </div>
                      </div>
            )
        })
      }
    
      </div>

    {/* portfolio card end !!!*/}
     </>
  )
}

export default PortCard;
