import React from 'react';
import './App.css';

import Players from './Players';
import Player from './Player';
import UserDetail from './UserDetail';
import NewPlayerForm from './NewPlayerForm';


import axios from 'axios';
import { Route, Link, Redirect, Switch, withRouter } from "react-router-dom";

const backendPlayersUrl = "http://localhost:8080/api/Players/";
const backendTeamsUrl = "http://localhost:8080/api/Teams/";
const backendVenuesUrl = "http://localhost:8080/api/Venues/";

class App extends React.Component {
  constructor(props) {
    super()

    this.state = {
      players: [],
      newPlayerName: '',
      newPlayerTeam: '',
      newPlayerNumber: '',
      newPlayerPosition: '',
      newPlayerTeam_id: '',
      teams: [],
    }
  }

  componentDidMount() {
    this.getPlayersAxios()

  }

  getPlayersAxios() {
    axios({ method: "GET", url: backendPlayersUrl }).then(players => 
      this.setState({ players: players.data })
      // const playersData = players.data
    );
  }
  getTeamsAxios() {
    axios({ method: "GET", url: backendTeamsUrl }).then(teams =>
      this.setState({ teams: teams.data })
    );
  }
  // getVenuesAxios() {
  //   axios({ method: "GET", url: backendVenuesUrl }).then(venues =>
  //     this.setState({ venues: venues.data })
  //   );
  // }
  createPlayerAxios() {
    axios({
      method: "POST",
      url: backendPlayersUrl,
      data: {
        name: this.state.newPlayerName,
        team: this.state.newPlayerTeam,
        number: this.state.newPlayerNumber,
        position: this.state.newPlayerPosition,
        team_id: this.state.newPlayerTeam_id
      }
    })
    .then(newPlayer => {
      console.log(newPlayer)
      this.setState(prevState => ({
        players: [...prevState.players, newPlayer.data]
      }))
    })
  }

  deleteAxiosPlayer = event => {
    event.preventDefault()
    
    axios({
      method: "DELETE",
      url: `${backendPlayersUrl}${event.target.id}`
    })
    .then(deletedPlayer => {
      this.getPlayersAxios();
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.createPlayerAxios()
  }

  handleChange = (event) => {
    this.setState({ 
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.state.players);
    console.log(this.state.teams);
    return (
      <div className="App">
        <nav>
          <Link to="/">All Users</Link>
          <Link to="/new-player-form">New Player Form</Link>
        </nav>
        <Switch>
          <Route
            exact
            path="/"
            render={routerProps => (
              <Players
                players={this.state.players}
                handleDelete={this.deleteAxiosPlayer}
              />
            )}
          />
          {/* <Route
            path="/Players/:id"
            render={routerProps => <UserDetail {...routerProps} users={this.state.users} />}
          /> */}
          <Route
            path="/new-player-form"
            render={() => (
              <NewPlayerForm
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            )}
          />
          <Route path="/*" render={() => <Redirect to="/Players" />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
