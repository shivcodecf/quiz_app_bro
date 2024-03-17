import React from 'react'
import { useContext ,useRef } from "react";
import {useState}from 'react'
import { Questions } from './helpers/Questions'
import { GameStateContext } from './helpers/contests'
import './style.css';


const Quiz = () => { 
    const [optionChosen, setOptionChosen] = useState("");
    const[index,setindex]= useState(0);  
    const[lock,setlock]=useState(false);
    const boxRef = useRef(null); // Create a ref
    const { score, setScore, gameState, setGameState } = useContext(
        GameStateContext
      );
   
      const chooseOption = (option,e) => {
       
         
        if(lock==false){  
          setOptionChosen(option); 
         
        if (Questions[index].asnwer === option) {
          e.target.classList.add('correct');
          setScore(score + 1); 
          setlock(true);
        } else {
          e.target.classList.add('incorrect');
          setlock(true);
        }
      }
      
        
       
       
       
      };  



      const checkAnswer = () => {
        
    };



      const finishQuiz = () => {
       
       
        setGameState("stop");
       
        
      };
      const nextQuestion = () => { 
        
        // if (Questions[index].asnwer == optionChosen) {
        //   setScore(score + 1);
        
        // } 

        setindex(index + 1);
        setOptionChosen(""); 
        setlock(false);
      };
    

  return (
    <div className='Quiz'>
    
      
      
        <h3>{Questions[index].prompt}</h3> 
        <div className="questions">
        <button  
          className={
            optionChosen === "optionA" && Questions[index].asnwer === "optionA" ? "correct" :
            optionChosen === "optionA" && Questions[index].asnwer !== "optionA" ? "incorrect" :
            "black" }
       
          onClick={(e) => {
            {chooseOption("optionA",e)};
            checkAnswer()
           

          }}
         
        >
          {Questions[index].optionA}
        </button>
        <button  
          className={
            optionChosen === "optionB" && Questions[index].asnwer === "optionB" ? "correct" :
            optionChosen === "optionB" && Questions[index].asnwer !== "optionB" ? "incorrect" :
            "black" }
       
          onClick={(e) => {
            chooseOption("optionB",e);
            checkAnswer()
           

          }}
        
        >
          {Questions[index].optionB}
        </button>
        <button 
         className={
          optionChosen === "optionC" && Questions[index].asnwer === "optionC" ? "correct" :
          optionChosen === "optionC" && Questions[index].asnwer !== "optionC" ? "incorrect" :
          "black"
      }
      
         
          onClick={(e) => {
            chooseOption("optionC",e);
            checkAnswer()

          }}
         
        >
          {Questions[index].optionC}
        </button> 
        <button 
           className={
            optionChosen === "optionD" && Questions[index].asnwer === "optionD" ? "correct" :
            optionChosen === "optionD" && Questions[index].asnwer !== "optionD" ? "incorrect" :
            "black"
        }
         
          onClick={(e) => {
            chooseOption("optionD",e);
            checkAnswer()

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