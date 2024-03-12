import React from 'react'
import { useContext } from "react";
import {useState}from 'react'
import { Questions } from './helpers/Questions'
import { GameStateContext } from './helpers/contests'
import './style.css';


const Quiz = () => { 
    const [optionChosen, setOptionChosen] = useState("");
    const[index,setindex]= useState(0);
    const { score, setScore, gameState, setGameState } = useContext(
        GameStateContext
      );
   
      const chooseOption = (option) => {
        setOptionChosen(option);
      }; 

      const finishQuiz = () => {
        if (Questions[index].asnwer == optionChosen) {
          setScore(score + 1);
        }
        setGameState("stop");
      };
      const nextQuestion = () => {
        if (Questions[index].asnwer == optionChosen) {
          setScore(score + 1);
        }
        setindex(index + 1);
      };
    

  return (
    <div className='Quiz'>
    
      
      
        <h3>{Questions[index].prompt}</h3> 
        <div className="questions">
        <button 
          onClick={() => {
            chooseOption("optionA");
          }}
        >
          {Questions[index].optionA}
        </button>
        <button
          onClick={() => {
            chooseOption("optionB");
          }}
        >
          {Questions[index].optionB}
        </button>
        <button
          onClick={() => {
            chooseOption("optionC");
          }}
        >
          {Questions[index].optionC}
        </button>
        <button
          onClick={() => {
            chooseOption("optionD");
          }}
        >
          {Questions[index].optionD}
        </button>
      </div>


      {index == Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion } id="nextQuestion">
          Next Question
        </button>
      )}

      

    </div>
  )
}

export default Quiz
