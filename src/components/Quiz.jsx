import React from 'react'
import { useContext ,useRef } from "react";
import {useState}from 'react'
import { Questions } from './helpers/Questions'
import { GameStateContext } from './helpers/contests'
import './style.css';






const Quiz = () => { 
  const [optionChosen, setOptionChosen] = useState("");
  const [index, setIndex] = useState(0);  
  const [lock, setLock] = useState(false);
  
  // Create refs for each option button
  const optionARef = useRef(null);
  const optionBRef = useRef(null);
  const optionCRef = useRef(null);
  const optionDRef = useRef(null);
  
  // Store the refs in an array for easy access
  const optionRefs = [optionARef, optionBRef, optionCRef, optionDRef];

  const { score, setScore, gameState, setGameState } = useContext(
      GameStateContext
  );

  const chooseOption = (option, e) => {
    if (!lock) {  
        setOptionChosen(option); 
        const correctAnswer = Questions[index].asnwer; // Get the correct answer option
        
        // Get refs for the selected and correct answer buttons
        const selectedOptionRef = e.target;
        const correctAnswerIndex = ["optionA", "optionB", "optionC", "optionD"].indexOf(correctAnswer);
        const correctAnswerRef = optionRefs[correctAnswerIndex]?.current;

        if (option === correctAnswer) {
            selectedOptionRef.classList.add('correct');
            setScore(score + 1); 
        } else {
            selectedOptionRef.classList.add('incorrect');
            correctAnswerRef?.classList.add('correct'); // Highlight correct answer
        }
        setLock(true);
    }
};


  const finishQuiz = () => {
      setGameState("stop");
  };

  const nextQuestion = () => { 
      setIndex(index + 1);
      setOptionChosen(""); 
      setLock(false);
      // Reset background color of all option buttons
      optionRefs.forEach(ref => {
          if (ref.current) {
              ref.current.classList.remove('correct', 'incorrect');
          }
      });
  };

  return (
      <div className='Quiz'>
          <h3>{Questions[index].prompt}</h3> 
          <div className="questions"> 
              <button
                  ref={optionARef}
                  onClick={(e) => chooseOption("optionA", e)}
              >
                  {Questions[index].optionA}
              </button>
              <button 
                  ref={optionBRef}
                  onClick={(e) => chooseOption("optionB", e)}
              >
                  {Questions[index].optionB}
              </button>
              <button 
                  ref={optionCRef}
                  onClick={(e) => chooseOption("optionC", e)}
              >
                  {Questions[index].optionC}
              </button> 
              <button  
                  ref={optionDRef}
                  onClick={(e) => chooseOption("optionD", e)}
              >
                  {Questions[index].optionD}
              </button>
          </div>

          {index === Questions.length - 1 ? (
              <button onClick={finishQuiz} id="nextQuestion">
                  Finish Quiz
              </button>
          ) : (
              <button onClick={nextQuestion} id="nextQuestion">
                  Next Question
              </button>
          )}
      </div>
  );
}

export default Quiz;
