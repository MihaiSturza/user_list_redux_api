import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList';
import Button from '@material-ui/core/Button';
import { changeAuth } from './actions';
import { connect } from 'react-redux';



class App extends Component {


  signIn() {
    if (!this.props.auth) {
      return <Button variant="extendedFab" 
                       area-label="Auth" 
                       className="add-btn-left"
                       mini
                       onClick={() => this.props.changeAuth(true)} 
                       >
                    <i className="material-icons">lock</i>
                </Button>
    } else {
      return  <Button variant="extendedFab" 
                area-label="Auth" 
                className="add-btn-left"
                mini
                onClick={() => this.props.changeAuth(false)} 
                >
                <i className="material-icons">lock_open</i>
              </Button>
      
    }
  }


  render() {
    return(
      <div className="app">
            <div className="header">
                <div className="title">List</div>
                    {this.signIn()}
                    <Button variant="extendedFab" 
                       area-label="Add" 
                       className="add-btn"
                       mini
                       onClick={() => this.props.auth ? this.props.history.push('/add-user') : null} 
                       >
                      <i className="material-icons">person_add</i>
                    </Button>
            </div>
        <UserList history={this.props.history}/>
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {auth: state.auth}
}

export default connect(mapStateToProps, {changeAuth})(App);
