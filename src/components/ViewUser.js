import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux';
import { deleteUser, fetchUser } from '../actions';


class ViewUser extends Component {


    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchUser(id);
    }


    onDelete() {
        const { id } = this.props.match.params;
        this.props.deleteUser(id, () => {
            this.props.history.push('/');
        });
    }

    onViewEdit() {
        this.props.history.push(`/user/${this.props.match.params.id}/edit`)
    }

    render() {
        const { user } = this.props;
        return (
            
                <div className="app">
                    <div className="modal-btn-back">
                        <Button variant="fab" 
                        area-label="Cancel" 
                        mini
                        onClick={() => this.props.history.push('/')} 
                        >
                        <i className="material-icons">keyboard_backspace</i>
                        </Button>
                    </div>
                        <div className="modal-title">User Details</div>
                            <div className="user-details-container">
                            <div className="user-detail">Name: {user.name}</div>
                            <div className="user-detail">Date of Birth: {user.dob.slice(0, 10)}</div>
                            <div className="user-detail">Phone: {user.phone}</div>
                            <div className="user-detail">Favorite Color: {user.favColor}</div>
                            </div>
                        <div className="contain-modal-btn">
                            <Button variant="extendedFab" 
                                area-label="Cancel" 
                                className="modal-btn-left" 
                                mini
                                onClick={this.onDelete.bind(this)} 
                                >
                                <i className="material-icons">delete</i>
                            </Button>
                            <Button variant="extendedFab" 
                                area-label="Save" 
                                className="modal-btn-right" 
                                mini
                                disabled={false}
                                onClick={this.onViewEdit.bind(this)} 
                                >
                                <Icon>edit_icon</Icon>
                            </Button>
                        </div>
                </div>
        );
    }
}


function mapStateToProps({users}, ownProps) {
    const user = users.filter(user => user._id === ownProps.match.params.id).pop();
    return {user: user ? user : {}};
}

export default connect(mapStateToProps, { deleteUser, fetchUser })(ViewUser);