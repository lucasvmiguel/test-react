import React, { Component } from 'react';
import PropTypes from 'prop-types';



const Form = ({ onSubmit, onChange, username, password, response }) => {
  const changeUsername = (event) => {
    onChange(event.target.value, password);
  }

  const changePassword = (event) => {
    onChange(username, event.target.value);
  }

  return (
    <form>
      <label>
        { response }
      </label>
      <label>
        Username:
        <input type="text" name="username" value={username} onChange={changeUsername}/>
      </label>
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={changePassword} />
      </label>
      <input type="button" onClick={onSubmit} value="submit"/>
    </form>
  )}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  response: PropTypes.number.isRequired
}

export default Form;
