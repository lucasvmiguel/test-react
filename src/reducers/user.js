const initialState = {users: [], isLoading: false, status: 0, userForm: {id: 0, name: '', password: ''}};

function user(state = initialState, action) {
  switch (action.type) {
  case 'USER_REFRESH_STATE':
    state = initialState;
    return state;
  case 'USER_LIST_SUBMIT':
    state.isLoading = true;
    return state;
  case 'USER_LIST_SUBMIT_SUCCESS':
    state.status = action.status;
    state.isLoading = false;
    state.users = action.users;
    return state;
  case 'USER_LIST_SUBMIT_FAILURE':
    state.status = action.status;
    state.isLoading = false;
    return state;
  case 'USER_GET_SUBMIT':
    state.isLoading = true;
    return state;
  case 'USER_GET_SUBMIT_SUCCESS':
    state.status = action.status;
    state.isLoading = false;
    state.userForm = action.user;

    return state;
  case 'USER_GET_SUBMIT_FAILURE':
    state.status = action.status;
    state.isLoading = false;
    return state;
  case 'USER_SAVE_SUBMIT':
    state.isLoading = true;
    return state;
  case 'USER_SAVE_SUBMIT_SUCCESS':
    state.status = action.status;
    state.isLoading = false;
    return state;
  case 'USER_SAVE_SUBMIT_FAILURE':
    state.status = action.status;
    state.isLoading = false;
    return state;
  case 'USER_CHANGE':
    state.userForm = action.user;
    return state;
  default:
    return state;
  }
}

export default user;