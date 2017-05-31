import React from 'react';
import { connect } from 'react-redux';
import request from 'request';

import Menu from '../components/Menu.js';
import User from '../components/User.js';
import { GetUsers, GetUsersSuccess, GetUsersFailure } from '../actions/user.js';


const fetchUsers = (dispatch) => {
  dispatch(GetUsers());

  request('https://jsonplaceholder.typicode.com/users', function (error, response, body) {
    if (error === null) {
      dispatch(GetUsersSuccess(response.statusCode, JSON.parse(body)));
    } else {
      dispatch(GetUsersFailure(response.statusCode));
    }
  });
};


class UserContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    fetchUsers(this.props.dispatch);
  }

  render() {
    let loading = null;
    let error = null;

    if (this.props.isLoading) {
      loading = <label> está carregando...</label>
    }

    if (this.props.status != 200 && this.props.status != 0) {
      error = <label> erro ao trazer usuários </label>
    }

    const listUsers = this.props.users.map((user) =>
      <User key={user.id} user={user} />
    );

    return (
      <div>
        <Menu />
        <h1>Users</h1>
        <button>Atualizar</button>
        {loading}
        {error}
        {listUsers}
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    users: state.user.users,
    status: state.user.status,
    isLoading: state.user.isLoading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);