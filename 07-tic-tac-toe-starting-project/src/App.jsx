import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

function deriveGameboard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  for (const turn of gameTurns) {
    const {square, player} = turn;
    const {row, col} = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function deriveWinner(gameBoard, players) {
  let winner = false;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];    
    if (firstSquare 
        && firstSquare === secondSquare 
        && firstSquare === thirdSquare
    ) {
      winner = players[firstSquare];
    }
  }
  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);

  function handlePlayerNameChange(symbol, name) {
    setPlayers((previousPlayers) => ({
      ...previousPlayers,
      [symbol]: name
    }))
  }

  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameboard(gameTurns);
  let winner = deriveWinner(gameBoard, players);
  
  const gameBoardLength = INITIAL_GAME_BOARD.flat().length;
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
          <Player 
            initialName={PLAYERS.X}
            symbol="X" 
            isActive={activePlayer === 'X'}
            handlePlayerNameChange={handlePlayerNameChange}          
          />
          <Player 
            initialName={PLAYERS.O} 
            symbol="O" 
            isActive={activePlayer === 'O'}
            handlePlayerNameChange={handlePlayerNameChange}
          />          
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      {(winner || hasDraw) && <GameOver winner={winner} onRematch={reMatchHandler}/>}
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App

