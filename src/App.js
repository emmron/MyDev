import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './Home';
import DeveloperList from './DeveloperList';
const App = () => (
  <Switch>
    <Route exact path="/login" component={Home} />
    <Route exact path="/dashboard" component={DeveloperList} />
  </Switch>
);

export default App;
