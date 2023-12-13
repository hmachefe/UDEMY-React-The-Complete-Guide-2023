export default function GameOver({winner, onRematch}) {

    console.log('winner', winner);

    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {winner && <p>Congratulations {winner} !</p>}
            {!winner && <p>It's a draw !</p>}            
            <button onClick={onRematch}>Rematch !</button>
        </div>
    )
}