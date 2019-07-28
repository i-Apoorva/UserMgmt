import React, { Component } from 'react';
import Popup from "reactjs-popup";
import axios from 'axios';



export default class EditUser extends Component {
    EditUser =(e) => {
        console.log(e.target.id);
    }
    render() {
        return (
            <div>
            <Popup trigger={<button type="button" className="btn btn-primary"> Edit</button>} position="left center" closeOnDocumentClick>
            <div> 
                <span> <b>Edit User</b></span>
                <form>
                <label>Name:</label>
                <input name="name"></input>
                <label>Email:</label>
                <input name="email"></input>
                <label>Gender:</label>
                <input name="gender"></input>
                <label>Phone:</label>
                <input name="phone"></input>
                <button type="button" id={this.props.id} onClick={this.EditUser} className="btn btn-primary"> Submit</button>
                </form>
                </div>
          </Popup>   
            </div>
        )
    }
}