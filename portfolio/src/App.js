import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects';

function App() {
  const [activeSection, setActiveSection] = useState('about'); // Default to 'about'

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Header onNavClick={handleNavClick} /> {/* Pass the click handler to the Header */}
      {activeSection === 'about' && <About />}
      {activeSection === 'projects' && <Projects />}
      
    </div>
  );
}

export default App;
