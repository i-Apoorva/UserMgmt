import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Popup from "reactjs-popup";

import axios from 'axios';

const Users = props => (
    <tr>
        <td>{props.user.name}</td>
        <td>{props.user.email}</td>
        <td>{props.user.gender}</td>
        <td>{props.user.phone}</td>
        <td>
        <Popup trigger={<button type="button" class="btn btn-primary"> View</button>} position="left center">
            <div>
                <p>
                <b>Name:</b> {props.user.name} <br/>
                <b>Email:</b> {props.user.email} 
                <br/>
                <b>Gender:</b> {props.user.gender} <br/>
                <b>Phone:</b> {props.user.phone} <br/>
                </p>
            </div>
        </Popup>
        </td> 
         <td>
            <Button variant="primary" onPress={UsersList.viewAction} >Update</Button>
        </td>
        <td>
        <Popup trigger={<button type="button" class="btn btn-primary"> Delete</button>} position="left center">
            <div> 
                <p>Are you sure? </p>
                <button type="button" class="btn btn-secondary"> No</button>
                <button type="button" class="btn btn-success" id={props.user._id}> Yes</button>
                </div>
          </Popup>      
        </td> 
        
    </tr>
)

export default class UsersList extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {users: []};
    }

    
    
    componentDidMount() {
        axios.get('http://localhost:8000/api/listusers/')
            .then(response => {
                console.log(response);
                this.setState({ users: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }
    
    usersList() {
        return this.state.users.map(function(currentUser, i){
            console.log(currentUser);
            return <Users user={currentUser} key={i} />;
        })
    }

    editAction() {
        alert('peace');
    }

    viewAction() {
        alert('out');
    }

    deleteAction() {
        
    }

    render() {
        return (
            <div>
                <h3>Users List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.usersList() }
                    </tbody>
                </table>
            </div>
        )
    }
}