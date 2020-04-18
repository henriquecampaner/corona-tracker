import React from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';

import Wrapper from './components/ContainerApp';
import history from './services/history';

import Map from './pages/Map';
import List from './pages/List';
import CountryDetails from './pages/CountryDetails';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Router history={history}>
          <Wrapper>
            <Route path="/" exact component={Map} />
            <Route path="/list" exact component={List} />
            <Route path="/details/:code" exact component={CountryDetails} />
          </Wrapper>
        </Router>
      </Switch>
    </BrowserRouter>
  );
}
