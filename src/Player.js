import React from 'react';
import { Route, Link, Redirect, Switch, withRouter } from "react-router-dom";
import './App.css';

const Player = props => {
    console.log(props)
    return (
    <div className="player">
        <p><Link to={`/Players/${props.player._id}`}>{props.player.name}</Link></p>
        <button id={props.player._id} onClick={props.handleDelete}>Delete {props.player.name}</button>
        <section className='padding'>
                
                </section>  
    </div>
    )
    
}


export default Player