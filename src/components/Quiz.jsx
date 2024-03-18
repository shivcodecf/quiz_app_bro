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
  const boxRef = useRef(null); // Create a ref
  const { score, setScore, gameState, setGameState } = useContext(
      GameStateContext
  );

  const chooseOption = (option, e) => {
      if (!lock) {  
          setOptionChosen(option); 
          if (Questions[index].asnwer === option) {
              boxRef.current.classList.add = 'correct';
              setScore(score + 1); 
          } else {
              boxRef.current.classList.add = 'incorrect';
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
      boxRef.current.style.backgroundColor = ''; // Reset background color
  };

  return (
      <div className='Quiz'>
          <h3>{Questions[index].prompt}</h3> 
          <div className="questions">
              <button
                  ref={boxRef}
                  className={`optionButton ${
                      optionChosen === "optionA" && Questions[index].asnwer === "optionA" ? "correct" :
                      optionChosen === "optionA" && Questions[index].asnwer !== "optionA" ? "incorrect" :
                      ""
                  }`}
                  onClick={(e) => {
                      chooseOption("optionA", e);
                  }}
              >
                  {Questions[index].optionA}
              </button>
              {/* Similar buttons for optionB, optionC, and optionD */} 
              <button
                  ref={boxRef}
                  className={`optionButton ${
                      optionChosen === "optionB" && Questions[index].asnwer === "optionB" ? "correct" :
                      optionChosen === "optionB" && Questions[index].asnwer !== "optionB" ? "incorrect" :
                      ""
                  }`}
                  onClick={(e) => {
                      chooseOption("optionB", e);
                  }}
              >
                  {Questions[index].optionB}
              </button>
              <button
                  ref={boxRef}
                  className={`optionButton ${
                      optionChosen === "optionC" && Questions[index].asnwer === "optionC" ? "correct" :
                      optionChosen === "optionC" && Questions[index].asnwer !== "optionC" ? "incorrect" :
                      ""
                  }`}
                  onClick={(e) => {
                      chooseOption("optionC", e);
                  }}
              >
                  {Questions[index].optionC}
              </button> 

              <button
                  ref={boxRef}
                  className={`optionButton ${
                      optionChosen === "optionD" && Questions[index].asnwer === "optionD" ? "correct" :
                      optionChosen === "optionD" && Questions[index].asnwer !== "optionD" ? "incorrect" :
                      ""
                  }`}
                  onClick={(e) => {
                      chooseOption("optionD", e);
                  }}
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
