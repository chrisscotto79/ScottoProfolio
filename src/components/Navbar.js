import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { TypeAnimation } from 'react-type-animation';


function Navbar() {
  



  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-logo' >
            <TypeAnimation
              sequence={[
              'CS',
              3000,
              'Christopher Scotto',
              3000,
              'CS',
              3000,

              
                () => {
                  console.log('Done typing!'); // Place optional callbacks anywhere in the array
                }
              ]}

              speed={1}
              wrapper="div"
              cursor={false}
              repeat={0}
              style={{ fontSize: '1em' }}
              
            />
            
          </div>
         
        </div>
      </nav>
    </>
  );
}

export default Navbar;