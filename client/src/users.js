import React, {Component} from 'react';
import './App.css';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}
callAPI() {
    fetch("http://localhost:8000/api/listusers")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}
componentWillMount() {
    this.callAPI();
}

  render(){
    return (
    <div className="App">
      <h1> This is users Component </h1>
    </div>
  );
    }
  }
export default Users;
