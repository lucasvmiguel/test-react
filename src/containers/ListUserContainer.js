import React from 'react';
import { connect } from 'react-redux';
import request from 'request';

import ListUser from '../components/ListUser.js';
import { GetUsers, GetUsersSuccess, GetUsersFailure } from '../actions/user.js';


const fetchUsers = (dispatch) => () => {
  dispatch(GetUsers());

  request('https://jsonplaceholder.typicode.com/users', function (error, response, body) {
    if (error === null) {
      dispatch(GetUsersSuccess(response.statusCode, JSON.parse(body)));
    } else {
      dispatch(GetUsersFailure(response.statusCode));
    }
  });
};


class ListUserContainer extends React.Component {
  componentWillMount() {
    fetchUsers(this.props.dispatch)();
  }

  render() {
    let loading = null;

    if (this.props.isLoading) {
      loading = <label>loading...</label>
    }

    return (
      <div>
        {loading}
        <button onClick={this.props.refresh()}>Atualizar</button>
        {!this.props.isLoading ? <ListUser users={this.props.users}/> : null}
      </div>
    )
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
    dispatch: dispatch,
    refresh: () => fetchUsers(dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListUserContainer);