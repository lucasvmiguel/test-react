// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Home from './containers/Home';
import About from './containers/About';

const Routes = ({ state, store, history }) => (
    <Provider store={store} >
      <Router history={history} >
        <div>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    </Provider>
);

Routes.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};

export default Routes;