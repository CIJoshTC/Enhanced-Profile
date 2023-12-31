
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
  const [activeSection, setActiveSection] = useState('about'); 

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Header onNavClick={handleNavClick} /> 
      {activeSection === 'about' && <About />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'contacts' && <Contacts />}
    </div>
  );
}

export default App;
