import React from 'react';
import './App.css';


const PlayerDetail = props => {
    console.log(props)
    let currentPlayerId = props.match.params.id
    let currentPlayer = props.players.filter((player, index) => {
        return (
           currentPlayerId === player.players_id
        )
    })
    console.log(currentPlayer)
    // let allTeams = props.teams.map(team => {
    //     return <option value={team.TeamName}>{team.TeamName}</option>
    // })
    return (
        <div className="updateplayerteamcontainer">
            <div>{currentPlayer[0].name}</div>
            {/* <form id="playersform" onSubmit={props.handleSubmit} onChange={props.handleChange}>
                TEAM: <select placeholder="Select a Team" name="newPlayerTeam"><option value=''>Select a Team</option>{allTeams}</select> 
                <input type="submit" />
            </form> */}
        </div>
    );
}

export default PlayerDetail