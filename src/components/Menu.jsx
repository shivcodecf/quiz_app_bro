import React ,{useState,useContext} from 'react'
import { GameStateContext } from './helpers/contests' 
import './style.css'



const Menu = () => {
    const { gameState, setGameState, userName, setUserName } = useContext(
        GameStateContext
      );
  return (
    <div className='Menu'>
       
      <div className='menu'>

      <button onClick ={ ()=>setGameState("playing")} id="startbutton">
        start quiz
      </button>
      </div>
    

    </div>
  )
}

export default Menu
