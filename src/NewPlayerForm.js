import React from 'react';
import './App.css';

const NewPlayerForm = props => {
    return (
        <div className="newplayerformcontainer">
            <form onSubmit={props.handleSubmit} onChange={props.handleChange}>
                NAME: <input type="text" name="newPlayerName" />
                TEAM: <input type="text" name="newPlayerTeam" />
                NUMBER: <input type="number" name="newPlayerNumber" />
                POSITION: <input type="text" name="newPlayerPosition" />
                <input type="submit" />
            </form>
        </div>
    );
}

export default NewPlayerForm