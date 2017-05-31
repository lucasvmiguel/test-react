function login(state = {users: [], isLoading: false, status: 0}, action) {
  switch (action.type) {
  case 'USERS_SUBMIT':
    state.isLoading = true;
    return state;
  case 'USERS_SUBMIT_SUCCESS':
    state.status = action.status;
    state.isLoading = false;
    state.users = action.users;
    return state;
  case 'USERS_SUBMIT_FAILURE':
    state.status = action.status;
    state.isLoading = false;
    return state;
  default:
    return state;
  }
}

export default login;