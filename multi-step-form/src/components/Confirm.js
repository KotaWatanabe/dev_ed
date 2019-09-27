import React, { Component } from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
        return (
            <MultiThemeProvider>
              <>
                <AppBar title='Confirm' />
                <List>
                  <ListItem 
                    primaryText="First Name"
                    secondaryText={ firstName }
                  />    
                  <ListItem 
                    primaryText="Last Name"
                    secondaryText={ lastName }
                  />    
                  <ListItem 
                    primaryText="Email"
                    secondaryText={ email }
                  />    
                  <ListItem 
                    primaryText="Occupation"
                    secondaryText={ occupation }
                  />    
                  <ListItem 
                    primaryText="City"
                    secondaryText={ city }
                  />    
                  <ListItem 
                    primaryText="Bio"
                    secondaryText={ bio }
                  />    
                </List>
                <br/>
                <RaisedButton
                  label = "Confirm & Continue"
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

export default FormUserDetails