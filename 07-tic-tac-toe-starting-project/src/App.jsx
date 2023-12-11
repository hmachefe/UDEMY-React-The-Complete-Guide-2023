import Player from "./components/Player"
import GameBoard from "./components/Gameboard"
import { useState } from "react";
import Log from "./components/Log";


function deriveActiveUser(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activeUser, setActiveUser] = useState('X');
  const activePlayer = deriveActiveUser(gameTurns);


  function handleSelectSquare(rowIndex, colIndex) {    
    // setActiveUser((currentActiveUser => (currentActiveUser === 'X' ? 'O' : 'X')));
    
    setGameTurns((previousGameTurns) => {

      let currentPlayer = deriveActiveUser(previousGameTurns);

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
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>          
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App

