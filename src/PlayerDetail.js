import React from 'react';
import './App.css';
import './PlayerDetail.css';


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
    console.log(props.teams)
    console.log(props.players[0]._id)
    // let allTeams = props.teams.map(team => {
    //     return <option value={team.TeamName}>{team.TeamName}</option>
    // })
    return (
        <div className="updateplayerteamcontainer">
            <div> NAME: {currentPlayer[0].name}</div> 
            TEAM: <select id={currentPlayer[0]._id} onChange={props.handleUpdate} name="newPlayerTeam"><option value=''>{currentPlayer[0].team}</option>{allTeams}</select> 
            <div> NUMBER: {currentPlayer[0].number}</div> 
            <div> POSITION: {currentPlayer[0].position}</div> 
            
            
        </div>
    );
}

export default PlayerDetail