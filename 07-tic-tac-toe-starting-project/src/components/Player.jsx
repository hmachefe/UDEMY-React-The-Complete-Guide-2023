import { useState } from "react";

export default function Player({initialName, symbol, isActive}) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(!isEditing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }
        
    let editablePlayerName = <span className="player-name">Player {playerName}</span>;
    let buttonCaption = "Edit";

    if (isEditing) {
        editablePlayerName = <input type="text" value={playerName} onChange={handleChange}/>
        buttonCaption = "Save";
    }

    return (
        <li className={isActive ? "active" : ""}>
            <span className="player">
                {editablePlayerName}

                <span className="player-symbol">Player {symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {buttonCaption}
            </button>
        </li>
    )
}