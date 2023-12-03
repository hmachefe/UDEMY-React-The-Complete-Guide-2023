import { useState } from "react";

export default function Player({name, symbol}) {

const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(!isEditing);
    }
        
    let playerName = <span className="player-name">Player {name}</span>;
    let buttonCaption = "Edit";

    if (isEditing) {
        playerName = <input type="text" defaultValue={name} />
        buttonCaption = "Save";
    }

    return (
        <li>
            <span className="player">
                {playerName}

                <span className="player-symbol">Player {symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {buttonCaption}
            </button>
        </li>
    )
}