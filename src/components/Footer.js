import React from 'react';
import './Footer.css';



function Footer() {
  


  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          If any questions pop up, please feel free to email me.
        </p>
        <a className='footer-subscription-text' href='mailto: chrisscotto1@outlook.com'>
          Chrisscotto1@outlook.com
        </a>
        
      </section>
    </div>
  );
}

export default Footer;