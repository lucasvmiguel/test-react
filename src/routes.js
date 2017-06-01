// src/routes.js
import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Redirect from="/home" to="/"/>
            <Route path="/about" component={AboutContainer} />
            <Route path="/users" component={ListUserContainer} />
            <Route path="/usersnew" component={FormUserContainer} />
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