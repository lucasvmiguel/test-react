import React from 'react';
import PropTypes from 'prop-types';

const Login = ({ onSubmit, onChange, login }) => {
  const changeUsername = (event) => {
    onChange(event.target.value, login.password);
  }

  const changePassword = (event) => {
    onChange(login.username, event.target.value);
  }

  let isLoading = null;
  if (login.isLoading) {
    isLoading = <label>Está carregando</label>
  } else {
    isLoading = <label>Não está carregando</label>
  }

  return (
    <form>
      <label>
        { login.status }
      </label>
      <label>
        { isLoading }
      </label>
      <label>
        Username:
        <input type="text" name="username" value={login.username} onChange={changeUsername}/>
      </label>
      <label>
        Password:
        <input type="password" name="password" value={login.password} onChange={changePassword} />
      </label>
      <input type="button" onClick={onSubmit} value="submit"/>
    </form>
  )}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  login: PropTypes.object.isRequired
}

export default Login;
