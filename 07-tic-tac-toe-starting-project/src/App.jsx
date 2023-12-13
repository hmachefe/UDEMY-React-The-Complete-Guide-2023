import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false);
  // const [activeUser, setActiveUser] = useState('X');
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(array => [...array])];
  console.log('initialGameBoard == ', initialGameBoard)

  for (const turn of gameTurns) {
      const {square, player} = turn;
      const {row, col} = square;
      gameBoard[row][col] = player;
  }

  let winner = false;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];    
    if (firstSquare 
        && firstSquare === secondSquare 
        && firstSquare === thirdSquare
    ) {
      winner = firstSquare;
    }
  }

  const gameBoardLength = initialGameBoard.flat().length;
  const hasDraw = gameTurns.length === gameBoardLength && !winner;

  function reMatchHandler() {
    setGameTurns([]);
  }

  function handleSelectSquare(rowIndex, colIndex) {    
    // setActiveUser((currentActiveUser => (currentActiveUser === 'X' ? 'O' : 'X')));
    
    setGameTurns((previousGameTurns) => {

      let currentPlayer = deriveActivePlayer(previousGameTurns);

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
        {winner && <div id="winner">Player {activePlayer} wins!</div>}
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>          
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      {(winner || hasDraw) && <GameOver winner={winner} onRematch={reMatchHandler}/>}
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App

