const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({onSelectSquare, turns}) {

    // const [gameboard, setGameboard] = useState(initialGameBoard);

    // function clickHandler(rowIndex, colIndex) {
    //     setGameboard((previousGameboard) => {
    //         const newGameboard = [...previousGameboard.map(row => [...row])];
    //         newGameboard[rowIndex][colIndex] = playerSymbol;
    //         return newGameboard;
    //     });
    //     handleSquareClick(playerSymbol)
    // }

    let gameboard = initialGameBoard;

    for (const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;
        gameboard[row][col] = player;
    }

    return (
        <ol id="game-board">
            {gameboard.map((row, rowIndex) => {
                return <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => {
                            return <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol != null}>
                                    {playerSymbol}
                                </button>
                            </li>
                        })}
                    </ol>
                </li>
            })}
        </ol>
    )
}

