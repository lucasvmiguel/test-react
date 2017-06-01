import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <div>
    <label>{user.id} - {user.name}</label>
  </div>
)

User.propTypes = {
  user: PropTypes.object.isRequired
}

export default User;
