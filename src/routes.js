// src/routes.js
import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Home from './containers/Home';
import About from './containers/About';
import NotFound from './containers/NotFound';
import User from './containers/User';

const Routes = ({ store, history }) => (
    <Provider store={store} >
      <Router history={history} >
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect from="/home" to="/"/>
            <Route path="/about" component={About} />
            <Route path="/users" component={User} />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    </Provider>
);

Routes.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Routes;