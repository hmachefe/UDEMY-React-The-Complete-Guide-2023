export default function GameOver({winner}) {

    console.log('winner', winner);

    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {winner && <p>Congratulations {winner} !</p>}
            {!winner && <p>This is a draw !</p>}            
            <button>Play Again</button>
        </div>
    )
}