import React from 'react';
import './App.css';
import './NewTeamForm.css';
const NewTeamForm = props => {
    console.log(props)
    return (
        <div className="newteamformcontainer">
            <form id="teamsform" onSubmit={props.handleTeamSubmit} onChange={props.handleChange} >
                <div className="teaminputfield">TEAM NAME: <input className="inputfield" type="text" placeholder="Team Name" name="newTeamName" /></div>
                <div className="teaminputfield">DIVISION: <input className="inputfield" type="text" placeholder="Division" name="newTeamDivision" /></div>
                <div className="teaminputfield formsubmitcontainer"><input  className="inputfield formsubmit" type="submit" /></div>
                
            </form>
        </div>
    );
}

export default NewTeamForm