export default function Log({turns}) {
 
    return (
        <ol id="log">
            {turns.map((turn, index) => {
                const {square, player} = turn;
                const {row, col} = square;
                return (
                    <li key={index}>
                        Player {player} has selected [{row}, {col}]
                    </li>
                )
            })}
        </ol>
    )
}