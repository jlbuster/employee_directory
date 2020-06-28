import React, { Component } from "react";
import UserCard from "./components/userCard/index";
import users from "./users.json";
import "./app.css"

class App extends Component {
  // Setting this.state.users to the friends json array
  state = {
    users,
    search: "",
    results: []
  };

  

  sortName = () => {
    function compare (a, b) {
      const compareOne = a.name.toUpperCase();
      const compareTwo = b.name.toUpperCase();
    
      let comparison = 0;
      if (compareOne > compareTwo) {
        comparison = 1;
      } else if (compareOne < compareTwo) {
        comparison = -1;
      }
      return comparison;
    }

    const users = this.state.users.sort(compare)
    this.setState({ users });
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value, results: [] })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const results = users.filter(user => user.name.toUpperCase() === this.state.search.toUpperCase())
    this.setState({ users: results })

    if (this.state.search.length === 0) {
      this.setState({ users: users})
    }
  }

  
  // Map over this.state.users and render a userCard component for each user object
  render() {
    return (
      <div>
        <h1>USERS</h1>
        <label className="nameLabel" htmlFor="nameFilter">Search by name</label>
        <input 
        className="nameInput"
        placeholder="Enter a Name" 
        value={this.search} 
        onChange={this.handleInputChange}
        id="nameFilter"
        />
        <button className="filterName" type="submit" onClick={this.handleFormSubmit}>Filter by Name</button>
        <button className="sortName" onClick={this.sortName}>Sort by Name</button>
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