import React, { Component } from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MultiThemeProvider>
              <>
                <AppBar title='Enter User Details' />
                <TextField 
                  hintText="Enter Your First Name"
                  floatingLabelText="First Name"
                  onChange={handleChange('firstName')}
                  defaultValue={values.firstName}
                />
                <TextField 
                  hintText="Enter Your Last Name"
                  floatingLabelText="Last Name"
                  onChange={handleChange('lastName')}
                  defaultValue={values.lastName}
                />
                <TextField 
                  hintText="Enter Your Email"
                  floatingLabelText="Email"
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                />
                <br/>
                <RaisedButton
                  label = "Continue"
                  primary={true}
                  style={styles.button}
                  onClick = {this.continue}
                />
              </>
            </MultiThemeProvider>
        )
    }
}

const styles = {
  button: {
      margin: 15
  }
}

export default FormUserDetails
