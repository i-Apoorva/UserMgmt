import React, { Component } from 'react';
import Popup from "reactjs-popup";
//import axios from 'axios';

export default class DeleteUser extends Component {
    
    render() {
        return (
            <div key={this.props.id}>
                <Popup trigger={<button type="button" className="btn btn-primary"> Delete</button>} position="left center" closeOnDocumentClick>
            {close=> (
            <div> 
                <p>Are you sure? </p>
                <form>
                <button type="button" onClick={close} className="btn btn-secondary"> No</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" id={this.props.id} onClick={()=>{this.props.handler( this.props.id)}} className="btn btn-success"> Yes</button>
                </form>
                </div>
            )}
          </Popup>   
            </div>
        )
    }
}

