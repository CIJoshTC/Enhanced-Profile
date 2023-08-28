import React from 'react';
import './Header.css'; // not created yet

const Header = ()=> {
    return (
        <header className = "header">
        <nav className="nav">
        <div className="logo">Joshua Thomas Connell</div>
        <ul className="nav-list">
          <li><a href="#about"> About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact"> Email: 23joshtc@gmail.com,  Github:CIjoshTC</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;