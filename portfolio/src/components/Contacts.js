import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <section id="contacts" className="contacts">
      <h2>Contact Me</h2>
      <p>To contact me personally please feel free to reach out using contacts below!</p>
      <ul className="contacts-list">
        <li>Email: 23joshtc@gmail.com</li>
        <li>Phone: (561) 755-1307</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">Joshua Connell</a></li>
        <li>GitHub: <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">CIJoshTC</a></li>
      </ul>
    </section>
  );
};

export default Contacts;