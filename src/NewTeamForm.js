import React from 'react';
import './App.css';

const NewTeamForm = props => {
    console.log(props)
    return (
        <div className="newteamformcontainer">
            <form id="teamsform" onSubmit={props.handleTeamSubmit} onChange={props.handleChange} >
                TEAM NAME: <input type="text" name="newTeamName" />
                DIVISION: <input type="text" name="newTeamDivision" />
                <input type="submit" />
                
            </form>
        </div>
    );
}

export default NewTeamForm