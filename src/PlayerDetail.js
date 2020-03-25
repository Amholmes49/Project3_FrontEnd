import React from 'react';
import './App.css';


const PlayerDetail = props => {
    console.log(props)

    let currentPlayerId = props.match.params.id
    let currentPlayer = props.players.filter((player, index) => {
        return (
           currentPlayerId === player._id
        )
    })
    const allTeams = props.teams.map(team => {
        return <option value={team.TeamName}>{team.TeamName}</option>
    })
    console.log(currentPlayer)
    console.log(props.players[0]._id)
    // let allTeams = props.teams.map(team => {
    //     return <option value={team.TeamName}>{team.TeamName}</option>
    // })
    return (
        <div className="updateplayerteamcontainer">
            <div>{currentPlayer[0].name}</div>
            
            {/* <form    onChange={props.handleChange}> */}
            TEAM: <select id={props.players[0]._id} onChange={props.handleUpdate} name="newPlayerTeam"><option value=''>{currentPlayer[0].team}</option>{allTeams}</select> 
            
            {/* <input type='submit' value='update'/>
            </form> */}
            {/* <form id="playersform" onSubmit={props.handleSubmit} onChange={props.handleChange}>
                TEAM: <select placeholder="Select a Team" name="newPlayerTeam"><option value=''>Select a Team</option>{allTeams}</select> 
                <input type="submit" />
            </form> */}
        </div>
    );
}

export default PlayerDetail