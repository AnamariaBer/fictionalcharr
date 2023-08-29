import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Garfield from './garfield';
import GarfieldInfo from './GarfieldInfo';
import GarfieldFact from './GarfieldFact';
import NotFound from './NotFound';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Garfield} />
      <Route exact path="/info" component={GarfieldInfo} />
      <Route path="/facts/:factId" component={GarfieldFact} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById('root')
);