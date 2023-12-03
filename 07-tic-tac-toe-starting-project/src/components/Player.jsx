import { useState } from "react";

export default function Player({name, symbol}) {

const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(true);
    }
        
    let playerName = <span className="player-name">Player {name}</span>;

    if (isEditing) {
        playerName = <input type="text" defaultValue={name} />
    }

    return (
        <li>
            <span className="player">
                {playerName}

                <span className="player-symbol">Player {symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                EDIT
            </button>
        </li>
    )
}