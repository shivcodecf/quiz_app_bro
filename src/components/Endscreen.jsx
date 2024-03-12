import React,{useContext} from 'react'
import { GameStateContext } from './helpers/contests';
import { Questions } from './helpers/Questions';

const Endscreen = () => {
    const { score, setScore, gameState, setGameState } = useContext(
        GameStateContext
      ); 

      const ResetQuiz =()=>{
        setGameState("menu")
        setScore(0);
      }
  return (
    <div className='resetquiz'> 
      <h1 className='Congra'>congratulations &#128517;</h1> 
      <p>Your score is {score}/{Questions.length} </p>
      
      <button onClick={ResetQuiz} id="startbutton" >Reset Quiz</button>
    </div>
  )
}

export default Endscreen
