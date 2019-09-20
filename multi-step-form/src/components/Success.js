import React, { Component } from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (
            <MultiThemeProvider>
              <>
                <AppBar title='Success' />
                <h1>Thank You For Your Submission</h1>
                <p>You will get an email with further instructions</p>
              </>
            </MultiThemeProvider>
        )
    }
}

export default Success
