import Player from "./components/Player"
import GameBoard from "./components/Gameboard"
import { useState } from "react";

function App() {
  
  const [activeUser, setActiveUser] = useState('X');


  function handleSquareClick() {    
    setActiveUser((currentActiveUser => (currentActiveUser === 'X' ? 'O' : 'X')));
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activeUser === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activeUser === 'O'}/>          
        </ol>
        <GameBoard playerSymbol={activeUser} handleSquareClick={handleSquareClick}/>
      </div>
      LOG
    </main>
  )
}

export default App

