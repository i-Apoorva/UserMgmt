import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    state = {
        name: null,
        email: null,
        gender: null,
        phone: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

AddUser =(e) => {
        e.preventDefault();
        console.log(e.target.id);
        var userId= e.target.id;
        console.log(this.state);
        axios.post("http://localhost:8000/api/listusers/" , this.state).then(response => {
            console.log(response.data);
          });

    }
    render() {
        return (
            <div>
                <span> <b>Add a new User</b></span>
                <form onSubmit={this.AddUser}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onChange={this.handleChange}></input> <br/>
                <label htmlFor="name">Email:</label>
                <input type="text" id="email" onChange={this.handleChange}></input><br/>
                <label htmlFor="name">Gender:</label>
                <input type="text" id="gender" onChange={this.handleChange}></input><br/>
                <label htmlFor="name">Phone:</label>
                <input type="text" id="phone" onChange={this.handleChange}></input><br/>
                <button type="button" id="add" onClick={this.AddUser} className="btn btn-primary"> Submit</button>
                </form>  
            </div>
        )
    }
}