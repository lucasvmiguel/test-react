// src/routes.js
import React from 'react';
import { Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import NotFoundContainer from './containers/NotFoundContainer';
import ListUserContainer from './containers/ListUserContainer';
import FormUserContainer from './containers/FormUserContainer';

const Routes = ({ store, history }) => (
  <Provider store={store} >
    <Router history={history} >
      <div>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/users">users</Link></li>
          <li><Link to="/users/new">new user</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Redirect from="/home" to="/"/>
          <Route path="/about" component={AboutContainer} />
          <Route exact path="/users" component={ListUserContainer} />
          <Route path="/users/new" component={FormUserContainer} />
          <Route path="/users/:id" component={FormUserContainer} />
          <Route component={NotFoundContainer}/>
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