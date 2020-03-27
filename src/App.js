import React from 'react';
import './App.css';

import Players from './Players';

import PlayerDetail from './PlayerDetail';
import NewPlayerForm from './NewPlayerForm';
import NewTeamForm from './NewTeamForm';

import axios from 'axios';
import { Route, Link, Redirect, Switch, withRouter } from "react-router-dom";
let backendUrl = process.env.REACT_APP_BACKEND_APP_URL || "http://localhost:8080/";



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
      newTeamDivision:'',
      isFlushed: false
    }
    this.handleTeamSubmit = this.handleTeamSubmit.bind(this);
    
  }

  

  componentDidMount() {
    this.getPlayersAxios()
    this.getTeamsAxios()
  }

  getPlayersAxios() {
    axios({ method: "GET", url: `${backendUrl}api/Players/` }).then(players => 
      this.setState({ players: players.data })
    );
  }
  getTeamsAxios() {
    axios({ method: "GET", url: `${backendUrl}api/Teams/` }).then(teams =>
      this.setState({ teams: teams.data })
    );

  }
  
  createPlayerAxios() {
    axios({
      method: "POST",
      url: `${backendUrl}api/Players/`,
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
  updatePlayerTeamAxios = event => {
    console.log(event.target.id)
    console.log(event.target.value)
    event.preventDefault()
    axios({
      method: "PUT",
      url: `${backendUrl}api/Players/${event.target.id}`,
      data: {
       
        team: event.target.value
        
      }
    })
    .then(updatedTeam => {
      let players = this.state.players
      console.log(players, updatedTeam)
      let updatePlayer = players.map(player => { 
        if(updatedTeam.data._id == player._id){
          player.team = updatedTeam.data.team
        }
        return player
      })
      
      this.setState({players: updatePlayer})
      
    })
  }
  createTeamAxios() {
    axios({
      method: "POST",
      url: `${backendUrl}api/Teams/`,
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
    .then(updatePlayer => {
      window.location.reload();
    });
  }
  deleteAxiosPlayer = event => {
    event.preventDefault()
    console.log(event.target.id)
    axios({
      method: "DELETE",
      url: `${backendUrl}api/Players/${event.target.id}`
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
    // console.log(this.state);
   console.log(this.state.players);
    
    return (
      <div className="App">
        <header>
        <nav>
          <Link to="/" className="headerLinks">Players</Link>
          <Link to="/new-player-form" className="headerLinks">New Player Form</Link>
          <Link to="/new-team-form" className="headerLinks">New Team Form</Link>
        </nav>
        </header>
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
          <Route
            path="/Players/:id"
            render={routerProps => <PlayerDetail {...routerProps} 
            handleUpdate={this.updatePlayerTeamAxios}
            players={this.state.players} 
            teams={this.state.teams}
            handleChange={this.handleChange}/>}
          />
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
