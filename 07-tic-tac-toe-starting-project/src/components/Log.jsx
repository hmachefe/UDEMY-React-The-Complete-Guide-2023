export default function Log({turns}) {
 
    return (
        <ol id="log">
            {turns.map((turn, index) => {
                return (
                    <li key={index}>
                        Player {turn.player} has selected {turn.square.row}, {turn.square.col}
                    </li>
                )
            })}
        </ol>
    )
}