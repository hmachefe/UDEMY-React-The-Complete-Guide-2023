export default function Log({turns}) {
 
    return (
        <ol id="log">
            {turns.map((turn) => {
                return (
                    <li key={`${turn.square.row}, ${turn.square.col}`}>
                        Player {turn.player} has selected {turn.square.row}, {turn.square.col}
                    </li>
                )
            })}
        </ol>
    )
}