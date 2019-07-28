import React, { Component } from 'react';
import Popup from "reactjs-popup";
import axios from 'axios';

export default class DeleteUser extends Component {
    // constructor(props){
    //     super(props);
    // }

    deleteUser = (e) => {
         e.preventDefault();
          console.log(e.target.id);
          var userId= e.target.id;
          console.log(userId);
        //   axios.delete('http://localhost:8000/api/listusers/' )
        //   .then(res => console.log(res.data));
        // axios.delete("http://localhost:8000/api/listusers/", { params: { id: userId } }).then(response => {
        //     console.log(response);
        //   })
        axios.delete("http://localhost:8000/api/listusers/"+ userId).then(response => {
            console.log(response.data);
          });
    }
    render() {
        return (
            <div>
                <Popup trigger={<button type="button" className="btn btn-primary"> Delete</button>} position="left center" closeOnDocumentClick>
            <div> 
                <p>Are you sure? </p>
                <form>
                <button type="button" className="btn btn-secondary"> No</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" id={this.props.id} onClick={this.deleteUser} className="btn btn-success"> Yes</button>
                </form>
                </div>
          </Popup>   
            </div>
        )
    }
}

