import Player from "./components/Player"
import GameBoard from "./components/Gameboard"
import { useState } from "react";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activeUser, setActiveUser] = useState('X');


  function handleSelectSquare(rowIndex, colIndex) {    
    setActiveUser((currentActiveUser => (currentActiveUser === 'X' ? 'O' : 'X')));
    setGameTurns((previousGameTurns) => {

      let currentPlayer = 'X';

      if (previousGameTurns.length > 0 && previousGameTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedGameTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex
          },
          player: currentPlayer
        },
        ...previousGameTurns
      ]

      return updatedGameTurns;

    });      
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activeUser === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activeUser === 'O'}/>          
        </ol>
        <GameBoard playerSymbol={activeUser} onSelectSquare={handleSelectSquare}/>
      </div>
      <Log />
    </main>
  )
}

export default App

