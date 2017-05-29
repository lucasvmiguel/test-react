// import request from 'request';

export const Submit = () => {
  // request('https://httpbin.org/get', function (error, response, body) {
  //   store.dispatch({ type: 'LOGIN_SUBMIT', response: response.statusCode })
  // });
  return { type: 'LOGIN_SUBMIT' };
}

export const Change = (username, password) => {
  return { type: 'LOGIN_CHANGE', username: username, password: password };
}