import { useState } from "react";

const intialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],        
]

export default function GameBoard() {

    const [gameBoard, setGameBoard] = useState(intialGameboard);

    function clickHandler(rowIndex, cellIndex) {
        setGameBoard((previousGameboard) => {
            const newBoard = [...previousGameboard];
            newBoard[rowIndex][cellIndex] = "X";   
            return newBoard; 
        });
    }    

    return (
        <ol id="game-board">
                {gameBoard.map((row, rowIndex) => (
                    <li key={rowIndex}> 
                        <ol>
                            {row.map((cell, cellIndex) => (
                                <li>
                                    <button onClick={() => clickHandler(rowIndex, cellIndex)}>{cell}</button>
                                </li>
                            ))}
                        </ol>
                    </li>  
                ))}

        </ol>
    );
}