import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateUser from "./components/create-user.component";
import EditUser from "./components/edit-user.component";
import UsersList from "./components/users-list.component";
import DeleteUser from "./components/delete-user.component";


class App extends Component {
  // initialize our state
  
  render() {
    return (
    <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">MERN-Stack UserMgmt App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Users</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create-User</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
        <Route path="/" exact component={UsersList} />
<Route path="/edit/:id" component={EditUser} />
<Route path="/create" component={CreateUser} />
<Route path="/delete" component={DeleteUser} />
   </div>
      </ Router> 
    );
    }
}

export default App;