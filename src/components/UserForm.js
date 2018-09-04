import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { InputAdornment } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = () => ({
  container: {
    display: 'block'
    
  },
  textField: {
    width: 270,
    margin: '20px auto'
  }
});


class UserForm extends Component {

  constructor(props) {
      super(props);
      this.state = (this.props.userId !== undefined) ? this.props.user : {name: '', dob: '', phone: '', favColor: ''};
  }

    render() {
        const { classes } = this.props;
        return(
            <div>
            <form noValidate autoComplete="off" className={classes.container}> 
                <TextField
                  id="name"
                  label="Name"
                  value={this.state.name}
                  margin="normal"
                  autoFocus={true}
                  className={classes.textField}
                  InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    )
                }}
                  onChange={event =>  this.setState({name: event.target.value})}
                />
                <br/>  
                <TextField
                  id="Date of Birth"
                  label="Date of Birth"
                  type="date"
                  margin="normal"
                  className={classes.textField}
                  value={this.props.user ? this.state.dob.slice(0, 10) : this.state.dob}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={event =>  this.setState({dob: event.target.value})}
                />
                <br/>
                <TextField
                  id="Phone"
                  label="Phone"
                  value={this.state.phone}
                  margin="normal"
                  className={classes.textField}
                  onChange={event =>  this.setState({phone: event.target.value})}
                />
                <br/>
                <TextField
                  id="favColor"
                  label="Favorite Color"
                  value={this.state.favColor}
                  margin="normal"
                  className={classes.textField}
                  onChange={event =>  this.setState({favColor: event.target.value})}
                />
            </form>

            <div className="contain-modal-btn">
              <Button variant="extendedFab" 
                area-label="Cancel" 
                className="modal-btn-left" 
                mini
                onClick={this.props.onDiscardChanges} 
                >
                <i className="material-icons">close</i>
              </Button>

              <Button variant="extendedFab" 
                area-label="Save" 
                className="modal-btn-right" 
                mini
                disabled={false}
                onClick={() => this.props.onSubmit(this.state)} 
                >
                <i className="material-icons">check</i>
              </Button>
            </div>

            </div>
        );
    }
}


UserForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserForm);