import React, { Component } from 'react';
//import { Button, ThemeProvider} from 'react-bootstrap';
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
        this.handleDelete = this.handleDelete.bind(this);
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
    
    handleDelete = ( id) => {
        //e.preventDefault();
         console.log(id);     
       axios.delete("http://localhost:8000/api/listusers/"+ id).then(response => {
           console.log(response.data);
         });
        const users = this.state.users.filter(user => { 
            return user._id !== id
        });
        console.log(users);
       this.setState({
            users
          })      
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
                    <tr key={user._id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.gender}</td>
        <td>{user.phone}</td>
        <td>
        <Popup trigger={<button type="button" className="btn btn-primary"> View</button>} position="left center" arrow={false}>
            {close => (
            <div>
            <a className="close" position="right corner" onClick={close}>
                &times;
                 </a>
                <p>
                <b>Name:</b> {user.name} <br/>
                <b>Email:</b> {user.email} 
                <br/>
                <b>Gender:</b> {user.gender} <br/>
                <b>Phone:</b> {user.phone} <br/>
                </p>
                
            </div>
            )}
        </Popup>
        </td> 
         <td>
            <EditUser id={user._id}/>
        </td>
         <td>
          <DeleteUser handler={this.handleDelete}  id={user._id} users={this.state.users}/>
        </td>  
    </tr>
                    ))}
                    </tbody>
                </table>
    
            </div>
        )
    }
}