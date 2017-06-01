export const GetUsers = () => {
  return { type: 'USER_LIST_SUBMIT' };
}

export const GetUsersSuccess = (status, users) => {
  return { type: 'USER_LIST_SUBMIT_SUCCESS', status: status, users: users };
}

export const GetUsersFailure = (status) => {
  return { type: 'USER_LIST_SUBMIT_FAILURE', status: status };
}

export const NewUser = () => {
  return { type: 'USER_NEW_SUBMIT' };
}

export const NewUserSuccess = (status) => {
  return { type: 'USER_NEW_SUBMIT_SUCCESS', status: status};
}

export const NewUserFailure = (status) => {
  return { type: 'USER_NEW_SUBMIT_FAILURE', status: status };
}