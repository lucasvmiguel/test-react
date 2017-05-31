export const GetUsers = () => {
  return { type: 'USERS_SUBMIT' };
}

export const GetUsersSuccess = (status, users) => {
  return { type: 'USERS_SUBMIT_SUCCESS', status: status, users: users };
}

export const GetUsersFailure = (status) => {
  return { type: 'USERS_SUBMIT_FAILURE', status: status };
}