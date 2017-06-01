import React from 'react';

import User from './User.js';


const ListUser = (props) => {
  const listUsers = props.users.map((user) =>
    <User key={user.id} user={user} />
  );

  return (
    <div>
      <h1>Users</h1>
      {listUsers}
    </div>
  );
}

export default ListUser;