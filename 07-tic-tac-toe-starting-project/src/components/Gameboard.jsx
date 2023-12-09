const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({onSelectSquare}) {

    // const [gameboard, setGameboard] = useState(initialGameBoard);

    // function clickHandler(rowIndex, colIndex) {
    //     setGameboard((previousGameboard) => {
    //         const newGameboard = [...previousGameboard.map(row => [...row])];
    //         newGameboard[rowIndex][colIndex] = playerSymbol;
    //         return newGameboard;
    //     });
    //     handleSquareClick(playerSymbol)
    // }

    return (
        <ol id="game-board">
            {gameboard.map((row, rowIndex) => {
                return <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => {
                            return <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        })}
                    </ol>
                </li>
            })}
        </ol>
    )
}

