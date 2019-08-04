import React, { Component } from 'react';
import { Button, ThemeProvider} from 'react-bootstrap';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Popup from "reactjs-popup";
import axios from 'axios';
import DeleteUser from './delete-user.component';
import EditUser from './edit-user.component';


export default class UsersList extends Component {
    
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {users: []};
        // this.usersList = this.usersList.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
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
    
      handleDelete =(id) => {
     let users = this.state.users.filter(user => user.id !== id);
         this.setState({users : users});
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
                    {this.state.users.map( (user) => (
                    <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.gender}</td>
        <td>{user.phone}</td>
        <td>
        <Popup trigger={<button type="button" className="btn btn-primary"> View</button>} position="left center">
            <div>
                <p>
                <b>Name:</b> {user.name} <br/>
                <b>Email:</b> {user.email} 
                <br/>
                <b>Gender:</b> {user.gender} <br/>
                <b>Phone:</b> {user.phone} <br/>
                </p>
            </div>
        </Popup>
        </td> 
         <td>
            <EditUser id={user._id}/>
        </td>
         <td>
          <DeleteUser  id={user._id} />
        </td>  
    </tr>
                    ))}
                    </tbody>
                </table>
    
            </div>
        )
    }
}