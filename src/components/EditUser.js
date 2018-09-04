import React, { Component } from 'react';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import { editUser } from '../actions';


class EditUser extends Component {

    onSubmit(editedUser) {
        this.props.editUser(editedUser, () => this.props.history.push('/'));
    }

    onDiscardChanges() {
        this.props.history.push('/')
    }

    render() {
  
        return (
            <div className="app">
                <div className="modal-title">Edit user details</div>
                    <UserForm 
                        user={this.props.currentUser}
                        onSubmit={this.onSubmit.bind(this)}
                        userId={this.props.currentUser._id}
                        onDiscardChanges={this.onDiscardChanges.bind(this)}
                        />  
            </div>
        );
    }
}


function mapStateToProps({users}, ownProps) {
    return {currentUser: [...users].filter(user => user._id === ownProps.match.params.id).pop()};
}


export default connect(mapStateToProps, { editUser })(EditUser);