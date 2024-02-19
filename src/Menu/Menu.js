import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';


function Menu() {
  return (
    <nav className="menu" role="Main Menu">
        <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            
        </ul>
    </nav>
  );
}

export default Menu;
