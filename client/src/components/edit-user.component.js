import React, { Component } from 'react';
import Popup from "reactjs-popup";
import axios from 'axios';



export default class EditUser extends Component {
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

    EditUser =(e) => {
        e.preventDefault();
        console.log(e.target.id);
        var userId= this.props.id;
        console.log(this.state);
        axios.put("http://localhost:8000/api/listusers/"+ userId , this.state).then(response => {
            console.log(response.data);
          });    
    }
    
    render() {
        return (
            <div>
            <Popup trigger={<button type="button" className="btn btn-primary"> Edit</button>} position="left center" closeOnDocumentClick>
            {close => (
            <div > 
            <a className="close" onClick={close}>
                 &times;
                  </a>
                <span> <b>Edit User</b></span>
                <form onSubmit={this.EditUser}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onChange={this.handleChange}></input>
                <label htmlFor="name">Email:</label>
                <input type="text" id="email" onChange={this.handleChange}></input>
                <label htmlFor="name">Gender:</label>
                <input type="text" id="gender" onChange={this.handleChange}></input>
                <label htmlFor="name">Phone:</label>
                <input type="text" id="phone" onChange={this.handleChange}></input>
                <button className="btn btn-primary"> Submit</button>
                </form>
                </div>
            )}
          </Popup>   
            </div>
        )
    }
}