// Import Statments
import React from 'react';
import logo from '../../Assets/svg/pizza-shark-logo.svg';

// Import Components
import Navbar from './Navbar';

export default function Header() {
  return (
    <div>
      <div className='logo'>
        <img src={logo} alt='Pizza Shark Logo' />
      </div>
      <Navbar />
    </div>
  );
}
