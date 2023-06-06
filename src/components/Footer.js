import React from 'react';
import './Footer.css';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          If you have any inquiries or need further clarification, please do not hesitate to contact me via email.
        </p>
        <a  className='footer-subscription-text' href='mailto:chrisscotto1@outlook.com'>
          Chrisscotto1@outlook.com 
        </a>
        <div className="icon-section">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaLinkedin />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Footer;
