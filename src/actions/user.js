export const RefreshUserState = () => {
  return { type: 'USER_REFRESH_STATE' };
}

export const GetUsers = () => {
  return { type: 'USER_LIST_SUBMIT' };
}

export const GetUsersSuccess = (status, users) => {
  return { type: 'USER_LIST_SUBMIT_SUCCESS', status: status, users: users };
}

export const GetUsersFailure = (status) => {
  return { type: 'USER_LIST_SUBMIT_FAILURE', status: status };
}

export const GetUser = () => {
  return { type: 'USER_GET_SUBMIT' };
}

export const GetUserSuccess = (status, user) => {
  return { type: 'USER_GET_SUBMIT_SUCCESS', status: status, user: user };
}

export const GetUserFailure = (status) => {
  return { type: 'USER_GET_SUBMIT_FAILURE', status: status };
}

export const SaveUser = () => {
  return { type: 'USER_SAVE_SUBMIT' };
}

export const SaveUserSuccess = (status) => {
  return { type: 'USER_SAVE_SUBMIT_SUCCESS', status: status};
}

export const SaveUserFailure = (status) => {
  return { type: 'USER_SAVE_SUBMIT_FAILURE', status: status };
}

export const ChangeUser = (user) => {
  return { type: 'USER_CHANGE', user: user };
}