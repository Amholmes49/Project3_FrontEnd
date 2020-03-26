import React from 'react';
import Player from './Player';
import { Route, Link, Redirect, Switch, withRouter } from "react-router-dom";
import PlayerDetail from './PlayerDetail'
const Players = props => {
    console.log(props.players);
    let allPlayers = props.players.map((player, index) => {
        return <Player key={player._id} player={player} handleDelete={props.handleDelete} />;
    })

    return (
        <div className="playersContainer">
            <div className="playerList">
                <div id="playerListText">Player List</div>
            {allPlayers}
            </div> 
        </div>
    )
}

export default Players