import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/UserList/UserList';
import MeetingDetails from './components/MeetingDetails/MeetingDetails';
import SendMeetingRequest from './components/SendMeetingRequest/SendMeetingRequest';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

function App() {

  const theme = createMuiTheme({
    overrides: {
      MuiButton: {
        outlinedSecondary: {
          borderRadius: '20px'
        },
        outlinedPrimary: {
          color: '#30c27e',
          borderColor: '#30c27e',
          "&:hover": {
            color: '#30c27e',
            borderColor: '#30c27e',
          }
        },
        containedPrimary: {
          borderColor: '#30c27e',
          backgroundColor: '#30c27e',
          color: '#ffffff',
          width: '75px',
          "&:hover": {
            borderColor: '#30c27e',
            backgroundColor: '#30c27e',
            color: '#ffffff',
          }
        },
        label:{
          flexDirection: 'column'
        }
      },
      MuiTypography: {
        subtitle1: {
          fontSize: '13px',
        },
        subtitle2: {
          fontSize: '10px'
        }
      },
      MuiInputBase: {
        root: {
          width: '400px'
        }
      }
    }
  })

  return (
    <div className="App">
      <Router>
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route path="/" exact component={UserList} />
            <Route path="/meetingInfo" exact component={MeetingDetails} />
            <Route path="/sendMeeting" exact component={SendMeetingRequest} />
          </Switch>
        </MuiThemeProvider>
      </Router>
    </div>
  );
}

export default App;
