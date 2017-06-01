import React from 'react';
import { connect } from 'react-redux';
import request from 'request';

import FormUser from '../components/FormUser.js';
import { SaveUser, SaveUserSuccess, SaveUserFailure, ChangeUser, GetUser, GetUserSuccess, GetUserFailure, RefreshUserState } from '../actions/user.js';

const submitForm = () => (dispatch, getState) => {
  dispatch(SaveUser());

  // const user = getState().user.userForm;

  request('https://httpbin.org/get', function (error, response, body) {
    if (error === null) {
      dispatch(SaveUserSuccess(response.statusCode));
    } else {
      dispatch(SaveUserFailure(response.statusCode));
    }
  });
};

const fetchUser = (dispatch, id) => () => {
  dispatch(GetUser());

  request('https://jsonplaceholder.typicode.com/users/'+id , function (error, response, body) {
    if (error === null) {
      dispatch(GetUserSuccess(response.statusCode, JSON.parse(body)));
    } else {
      dispatch(GetUserFailure(response.statusCode));
    }
  });
};


class FormUserContainer extends React.Component {
  constructor(props) {
    super(props);
    fetchUser(this.props.dispatch, this.props.match.params.id)();
  }

  render() {
    return (
      <div>
        <FormUser user={this.props.user.userForm} onChange={this.props.change} onSubmit={this.props.submit}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {user: state.user}
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
    submit: () => dispatch(submitForm()),
    change: (user) => dispatch(ChangeUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormUserContainer);