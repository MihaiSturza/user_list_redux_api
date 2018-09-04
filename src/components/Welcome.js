import React, { Component } from 'react'
import { connect } from 'react-redux';
import WelcomeForm from './WelcomeForm';



class Welcome extends Component {

    
    render() {
        
        return (
            <div className="app">
               <div className="modal-title">Welcome, {this.props.name}</div> 
                
               <div className="user-details">
                    Thank you for joining the list!
                    <br></br>
                    Let us know more about you by filling in the following form:
               </div> 

                <WelcomeForm history={this.props.history} user={this.props}/>
            </div>
        );
    }
}

function mapStateToProps ({users}, ownProps) {
    const user = [...users].filter(user => user.id === Number(ownProps.match.params.id)).pop();
    return user ? user : {};
}

export default connect (mapStateToProps)(Welcome); 