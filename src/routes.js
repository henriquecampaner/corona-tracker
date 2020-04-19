import React from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';

import Wrapper from './components/ContainerApp';
import history from './services/history';

import Map from './pages/Map';
import List from './pages/List';
import CountryDetails from './pages/CountryDetails';
import Symptoms from './pages/Symptoms';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Router history={history}>
          <Wrapper>
            <Route path="/" exact component={Map} />
            <Route path="/list" component={List} />
            <Route path="/details/:code" component={CountryDetails} />
            <Route path="/symptoms" component={Symptoms} />
          </Wrapper>
        </Router>
      </Switch>
    </BrowserRouter>
  );
}
