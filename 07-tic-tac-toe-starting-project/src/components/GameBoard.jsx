const intialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],        
]

export default function GameBoard() {
    return (
        <ol id="game-board">
                {intialGameboard.map((row, rowIndex) => (
                    <li key={rowIndex}> 
                        <ol>
                            {row.map((cell, cellIndex) => (
                                    <button key={cellIndex}></button>
                                ))}
                        </ol>
                    </li>  
                ))}

        </ol>
    );
}