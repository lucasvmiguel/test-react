import React from 'react';
import { Link } from 'react-router-dom';

import User from './User.js';


const ListUser = (props) => {
  let listUsers = null;

  if (!!props.editable) {
    listUsers = props.users.map((user) => (<div><User key={user.id} user={user} /><Link to={'/users/' + user.id}>edit</Link></div>));
  } else {
    listUsers = props.users.map((user) => (<div><User key={user.id} user={user} /></div>));
  }

  return (
    <div>
      <h1>Users</h1>
      {listUsers}
    </div>
  );
}

export default ListUser;