function login(state = {username: "", password: "", isLoading: false, status: 0}, action) {
  switch (action.type) {
  case 'LOGIN_SUBMIT':
    state.isLoading = true;
    return state;
  case 'LOGIN_SUBMIT_SUCCESS':
    state.status = action.status;
    state.isLoading = false;
    return state;
  case 'LOGIN_SUBMIT_FAILURE':
    state.status = action.status;
    state.isLoading = false;
    return state;
  case 'LOGIN_CHANGE':
    state.username = action.username;
    state.password = action.password;
    return state;
  default:
    return state;
  }
}

export default login;