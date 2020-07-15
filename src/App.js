import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/UserList/UserList';
import MeetingDetails from './components/MeetingDetails/MeetingDetails';
import { Provider } from './context';

function App() {

  const [selectedUser, setSelectedUser] = useState("");

  const getContext = () => ({
    selectedUser,
    setSelectedUser
  })

  return (
    <div className="App">
      <Router>
        <Provider value={getContext()}>
          <Switch>
            <Route path="/" exact component={UserList} />
            <Route path="/meeting" exact component={MeetingDetails} />
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
