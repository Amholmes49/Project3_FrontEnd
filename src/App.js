import React from 'react';
import './App.css';

import Players from './Players';
import Player from './Player';
import NewPlayerForm from './NewPlayerForm';
import NewTeamForm from './NewTeamForm';
import Dropdown from 'react-bootstrap/Dropdown'

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
      newTeamName: '',
      newTeamDivision:''
    }
    this.handleTeamSubmit = this.handleTeamSubmit.bind(this);
  }

  

  componentDidMount() {
    this.getPlayersAxios()
    this.getTeamsAxios()
  }

  getPlayersAxios() {
    axios({ method: "GET", url: backendPlayersUrl }).then(players => 
      this.setState({ players: players.data })
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
  createTeamAxios() {
    axios({
      method: "POST",
      url: backendTeamsUrl,
      data: {
        TeamName: this.state.newTeamName,
        Division: this.state.newTeamDivision,
        
      }
    })
    .then(newTeam => {
      console.log(newTeam)
      this.setState(prevState => ({
        teams: [...prevState.teams, newTeam.data]
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
    document.getElementById("playersform").reset();
  }
  handleTeamSubmit = event => {
    event.preventDefault()
    this.createTeamAxios() 
    document.getElementById("teamsform").reset(); 
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
          <Link to="/">Players</Link>
          <Link to="/new-player-form">New Player Form</Link>
          <Link to="/new-team-form">New Team Form</Link>
        </nav>
        <Switch>
          <Route
            exact
            path="/"
            render={routerProps => (
              <Players
                players={this.state.players}
                handleDelete={this.deleteAxiosPlayer}
                teams={this.state.teams}
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
                teams={this.state.teams}
              />  
            )}
          />
          <Route
            path="/new-team-form"
            render={() => (
              <NewTeamForm
                handleChange={this.handleChange}
                handleTeamSubmit={this.handleTeamSubmit}
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
