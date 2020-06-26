import React, { Component } from "react";
import UserCard from "./components/userCard/index";
import users from "./users.json";
import "./app.css"

class App extends Component {
  // Setting this.state.users to the friends json array
  state = {
    users
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <h1>USERS</h1>
        <label className="nameLabel">Search by name</label>
        <input className="nameInput" placeholder="Enter a Name"/>
        <button className="sortName">Sort by Name</button>
        <div className="wrapper">
          {this.state.users.map(user => (
            <UserCard
              id={user.id}
              key={user.id}
              name={user.name}
              image={user.image}
              position={user.position}
              age={user.age}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;