import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Field, reduxForm } from 'redux-form';
import { getData } from '../actions';
import { connect } from 'react-redux';
import validate from './Validation';




class WelcomeForm extends Component {
    
    submit(values) {
        const {id, dob, name, phone } = this.props.user;
        const userData = {...values, id, dob, name, phone};
        this.props.getData(userData);
        this.props.history.push('/');
    }

    renderField({input, label, meta: {touched, error}}) {
            
        return (
            <div className="welcome-form alert">
                <TextField
                    label={label}  
                    {...input}
                    autoFocus={label === "Country of origin" ? true : false}
                    className='text-field'
                    error={touched && error ? true : false}
                    helperText={touched && error ? error : ''}
                    />
            </div>
        )
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.submit.bind(this))} className="fields">
                <Field 
                    label="Country of origin" 
                    name="country"
                    ref={this.inputRef}
                    component={this.renderField}/>

                <Field 
                    label="Languages" 
                    name="language"
                    component={this.renderField} />

                <Field 
                    label="Driving licence" 
                    name="licence"
                    component={this.renderField} />

                <Field 
                    label="Hobbies" 
                    name="hobbies"
                    component={this.renderField} />
                <br/>
                <button 
                    type="submit" 
                    className="modal-btn" >
                <i className="material-icons">check</i>
                </button>
            </form>
        );
    }
}

WelcomeForm = reduxForm({
    validate,
    form: 'NewForm',
})(connect(null, { getData })(WelcomeForm));

export default WelcomeForm;