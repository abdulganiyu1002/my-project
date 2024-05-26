// src/Header.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import FukLogo from './fuk.jpg'; // Import fuk logo // Import the image with the correct file extension
import Home from './Home'; // Corrected path'
import './Home.css';
import Login from './Login';
import SignupForm from './SignupForm';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-fuk">
        <img src={FukLogo} alt="fuk Logo" className="logo-img" />
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/markets">Markets</Link></li>
          <li><Link to="/trade">Trade</Link></li>
          <li><Link to="/wallet">Wallet</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Signup">Signup</Link></li>
        </ul>
      </nav>
      <div className="header-profile">
        <div className="notifications">
          <i className="fas fa-bell"></i>
        </div>
        <div className="user-info">
          <span className="user-name">John Doe</span>
          <img className="user-avatar" src="/avatar.png" alt="User Avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
