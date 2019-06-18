import React from 'react';
import logo from '../images/logo.png'

const Navbar = () => {
  return (
      <div className="navbar-fixed">
          <nav className="custom-nav">
              <div className="nav-wrapper">
                  <a href="#!" className="brand-logo left">Note App
                      <img src={logo} alt="logo" className="left logo"/>
                  </a>
              </div>
          </nav>
      </div>
  );
}

export default Navbar;