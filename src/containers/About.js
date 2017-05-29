import React from 'react';
import { connect } from 'react-redux';

import Login from '../components/Login.js';
import { Submit, Change } from '../actions/login.js';

const AboutContainer = ({ login, change, submit}) => (
  <div>
    <Login login={login} onChange={change} onSubmit={submit} />
  </div>
)

const mapStateToProps = (state, ownProps) => {
  return {login: state.login}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submit: () => dispatch(Submit()),
    change: (username, password) => dispatch(Change(username, password))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);