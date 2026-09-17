import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => (
  <header className="header">
    <nav className="nav">
      <NavLink to="/" className="nav-link" activeclassname="active" end>
        Home
      </NavLink>
      <NavLink to="/users" className="nav-link" activeclassname="active">
        Users
      </NavLink>
      <NavLink to="/items" className="nav-link" activeclassname="active">
        Items
      </NavLink>
    </nav>
  </header>
);

export default Header;