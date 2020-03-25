import React from 'react';
import './App.css';


const NewPlayerForm = props => {
    console.log(props.teams)
    let allTeams = props.teams.map(team => {
        return <option value={team.TeamName}>{team.TeamName}</option>
    })
    return (
        <div className="newplayerformcontainer">
            <form id="playersform" onSubmit={props.handleSubmit} onChange={props.handleChange}>
                NAME: <input type="text" placeholder="Name" name="newPlayerName" />
                TEAM: <select placeholder="Select a Team" name="newPlayerTeam"><option value=''>Select a Team</option>{allTeams}</select> 
                NUMBER: <input type="number" name="newPlayerNumber" />
                POSITION: <input type="text" name="newPlayerPosition" />
                <input type="submit" />
            </form>
        </div>
    );
}

export default NewPlayerForm