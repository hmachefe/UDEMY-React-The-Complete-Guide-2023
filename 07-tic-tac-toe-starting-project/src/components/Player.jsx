export default function Player({name, symbol}) {
    return (
        <li>
            <span className="player">
                <span className="player-name">Player {name}</span>
                <span className="player-symbol">Player {symbol}</span>
            </span>
            <button>
                EDIT
            </button>
        </li>
    )
}