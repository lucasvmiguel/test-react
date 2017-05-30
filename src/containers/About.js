import React from 'react';
import { connect } from 'react-redux';
import request from 'request';

import Login from '../components/Login.js';
import { Submit, SubmitSuccess, SubmitFailure, Change } from '../actions/login.js';

const AboutContainer = ({ login, change, submit}) => (
  <div>
    <Login login={login} onChange={change} onSubmit={submit} />
  </div>
)

const submitForm = () => (dispatch, getState) => {
  dispatch(Submit());

  request('https://httpbin.org/get', function (error, response, body) {
    if (error === null) {
      dispatch(SubmitSuccess(response.statusCode));
    } else {
      dispatch(SubmitFailure(response.statusCode));
    }
  });
};

const mapStateToProps = (state, ownProps) => {
  return {login: state.login}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submit: () => dispatch(submitForm()),
    change: (username, password) => dispatch(Change(username, password))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);