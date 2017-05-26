import request from 'request';

const Submit = (store) => () => {
  request('https://httpbin.org/get', function (error, response, body) {
    store.dispatch({ type: 'LOGIN_SUBMIT', response: response.statusCode })
  });
}

const Change = (store) => (username, password) => {
  store.dispatch({ type: 'LOGIN_CHANGE', username: username, password: password });
}

export {
  Submit,
  Change
}