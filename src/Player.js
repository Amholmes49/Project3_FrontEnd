import React from 'react';
import { Route, Link, Redirect, Switch, withRouter } from "react-router-dom";
import PlayerDetail from './PlayerDetail'

// add a delete button
const Player = props => {
    console.log(props)
    return (
    <div>
        <p><Link to={`/Players/${props.player._id}`}>{props.player.name}</Link></p>
        <button id={props.player._id} onClick={props.handleDelete}>Delete {props.player.name}</button>
        
    </div>
    )
    
}


export default Player