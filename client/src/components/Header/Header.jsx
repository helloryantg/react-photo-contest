import React from 'react';
import './Header.scss';

function Header(props) {
  return (
    <div className="Header">
      <div className="name">Like.</div>
      <div className="settings">
        <div className="setting">
          <a href="/">Contests</a>
        </div>
        <div className="setting">
          <a href="/">Log In</a>
        </div>
        <div className="setting">
          <a href="/">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Header;