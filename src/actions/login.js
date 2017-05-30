export const Submit = () => {
  return { type: 'LOGIN_SUBMIT' };
}

export const SubmitSuccess = (status) => {
  return { type: 'LOGIN_SUBMIT_SUCCESS', status: status };
}

export const SubmitFailure = (status) => {
  return { type: 'LOGIN_SUBMIT_FAILURE', status: status };
}

export const Change = (username, password) => {
  return { type: 'LOGIN_CHANGE', username: username, password: password };
}