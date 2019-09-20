import React, { Component } from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MultiThemeProvider>
              <>
                <AppBar title='Enter Personal Details' />
                <TextField 
                  hintText="Enter Your Occupation"
                  floatingLabelText="Occupation"
                  onChange={handleChange('occupation')}
                  defaultValue={values.occupation}
                />
                <TextField 
                  hintText="Enter Your City"
                  floatingLabelText="City"
                  onChange={handleChange('city')}
                  defaultValue={values.city}
                />
                <TextField 
                  hintText="Enter Your Bio"
                  floatingLabelText="Bio"
                  onChange={handleChange('bio')}
                  defaultValue={values.bio}
                />
                <br/>
                <RaisedButton
                  label = "Continue"
                  primary={true}
                  style={styles.button}
                  onClick = {this.continue}
                />
                <RaisedButton
                  label = "Back"
                  primary={false}
                  style={styles.button}
                  onClick = {this.back}
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

export default FormPersonDetails
