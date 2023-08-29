import React from 'react';
import './Header.css'; 

const Header = (onNavClick)=> {
  const handleNavLinkClick = (section) => {
    onNavClick(section);
  };
    return (
        <header className = "header">
         <nav className="nav">
          <div className="logo">Joshua Thomas Connell</div>
            <ul className="nav-list">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
         </nav>
     
        </header>
  );
};

export default Header;