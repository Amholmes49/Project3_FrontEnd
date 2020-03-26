import React from 'react';
import './App.css';
import './NewPlayerForm.css';


const NewPlayerForm = props => {
    console.log(props.teams)
    let allTeams = props.teams.map(team => {
        return <option value={team.TeamName}>{team.TeamName}</option>
    })
    return (
        <div className="newplayerformcontainer">
            <form id="playersform" onSubmit={props.handleSubmit} onChange={props.handleChange}>
                <div className="playerinputfield">NAME: <input className="inputfield" type="text" placeholder="Name" name="newPlayerName" /></div>
                <div className="playerinputfield">TEAM: <select className="inputfield" placeholder="Select a Team" name="newPlayerTeam"><option value=''>Select a Team</option>{allTeams}</select></div> 
                <div className="playerinputfield">NUMBER: <input className="inputfield" type="number" placeholder="Number" name="newPlayerNumber" /></div>
                <div className="playerinputfield">POSITION: <input className="inputfield" type="text" placeholder="Position" name="newPlayerPosition" /></div>
                <div className="playerinputfield formsubmitcontainer"><input className="formsubmit" type="submit" /></div>
            </form>
        </div>
    );
}

export default NewPlayerForm