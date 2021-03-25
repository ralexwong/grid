import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import './sass/main.scss'

import history from './history';
import NoMatch from './NoMatch';
import Home from './Home';

import Practice from './Practice'


function App() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/practice" component={Practice} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
