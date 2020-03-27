# GA-Project3 Fantasy Stickball App

These applications represent the use of the technologies and techniques learned during unit 3. We built a front-end fantasy league application using React, with a Express, MongoDB backend application.

Project Description:
The application is can be used to track and create, players and teams in a fantasy sports league. 

Project Links:
GitHub- 
backend: https://github.com/Amholmes49/Project3_BackEnd 
frontend: https://github.com/Amholmes49/Project3_FrontEnd

Deployment to Heroku - https://fantasy-stickball-react.herokuapp.com/

Wireframe: none. We focused on completing the functional requirements.

MVP:
Back-End Requirements:

1. A GitHub repo with your backend app
2. Your back-end must be a Node, Express, and Mongoose API with at least 2 non-user models. No associations are required.
3. Must have Create, Read, Update, and Destroy functionality built throughout the app (i.e. You don't need full CRUD on every model, just full CRUD throughout your models where it makes sense).

Front-End Requirements:

1. A GitHub repo with your frontend app
2. Your front-end must use React and leverage the backend API in the above requirements.
3. You must use React Router to handle multiple views.
4. You must communicate with the back-end API RESTfully to Create, Read, Update, and Destroy resources (using axios).
5. Your frontend must be responsive and work on mobile phones, tablets, and desktops


Post MVP:
1. Styling.
2. New Team create.
		
Additional Libraries:

GitHub: 
Postman: 
Axios: 
React:
React-Router:
CORS-addon for Chrome: 
NodeJS: 
Heroku: 


Code Snippet:

Team drop down menu

```
<div className="playerinputfield">TEAM: <select className="inputfield" placeholder="Select a Team" name="newPlayerTeam"><option value=''>Select a Team</option>{allTeams}</select></div> 
```

Issues and resolutions:

Issue1: Creation of the drop down menu
Resolution: added select tag to form. Created a mapping for teams data to render team.name.

Issue2: When updating player team, the player.team did not update with the new team name.
Resolution: created a map to set data.player.team equal to state.player.team. (Thanks Casey!)

### Future Enhancements:

1. Sort Player list by Teams.
2. Update Team data.
3. Nest New Player form and New Team form into Players.

What we learned:
1. Git hub: team pushing and pulling.
2. Heroku: signup and deployment (challenges).
3. Understanding how that the models on the backend don't actually create a frame for what data can be added to the database.
4. Use of CRUD methods on REACT frontend.