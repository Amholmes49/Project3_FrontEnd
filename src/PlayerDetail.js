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
            <div className='playerteamupdate'>
            <div className='playerinputfield'> NAME: {currentPlayer[0].name}</div> 
            <div  className='playerinputfield'>TEAM: <select id={currentPlayer[0]._id} onChange={props.handleUpdate} name="newPlayerTeam"><option value=''>{currentPlayer[0].team}</option>{allTeams}</select> </div>
            <div className='playerinputfield'> NUMBER: {currentPlayer[0].number}</div> 
            <div className='playerinputfield'> POSITION: {currentPlayer[0].position}</div> 
            </div>
            
        </div>
    );
}

export default PlayerDetail