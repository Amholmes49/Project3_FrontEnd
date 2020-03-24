import React from 'react';
import { Link } from "react-router-dom";

// add a delete button
const Player = props => (
    <div>
        <p><Link to={`/Players/${props.player._id}`}>{props.player.name}</Link></p>
        <button id={props.player._id} onClick={props.handleDelete}>Delete {props.player.name}</button>
    </div>
);
export default Player