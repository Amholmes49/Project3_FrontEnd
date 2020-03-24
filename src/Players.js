import React from 'react';
import Player from './Player';

const Players = props => {
    console.log(props);
    let allPlayers = props.players.map(player => {
        return <Player key={player._id} player={player} handleDelete={props.handleDelete} />;
    })

    return (
        <div>
            {allPlayers}
        </div>
    )
}

export default Players