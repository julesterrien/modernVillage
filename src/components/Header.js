import React from 'react';
import './App.css';

const Header = () => (
  <header className="header layout">
    <div className="sidebar">
      <h2 className="account">The Thomptels</h2>
    </div>
    <div className="main">
      <ul className="tabs">
        <li>Dashboard</li>
        <li>Pods</li>
        <li>Journal</li>
      </ul>
      <div className="user-menu">Avni</div>
    </div>
  </header>
);

export default Header;

