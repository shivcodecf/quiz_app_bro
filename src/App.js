import React,{useState} from 'react'
import Menu from './components/Menu';
import './App.css'
import Endscreen from './components/Endscreen';
import Quiz from './components/Quiz';
import { GameStateContext } from './components/helpers/contests';



function App() {
  const[gameState,setGameState]= useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  return ( 
    <div className="App">
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
      {
        gameState ==="menu" && <Menu/>
      }
       {
        gameState ==="playing" && <Quiz/>
      }
       {
        gameState ==="stop" && <Endscreen/>
      }
      </GameStateContext.Provider>
      
      
    </div>
  );
}

export default App;
