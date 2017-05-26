function login(state = {username: "", password: "", response: 0}, action) {
  switch (action.type) {
  case 'LOGIN_SUBMIT':
    state.response = action.response;
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