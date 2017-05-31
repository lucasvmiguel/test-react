import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div className="Menu">
    <ul>
      <li><Link to="/">home</Link></li>
      <li><Link to="/users">users</Link></li>
      <li><Link to="/about">about</Link></li>
    </ul>
  </div>
)

export default Menu;
