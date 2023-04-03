// Import Statments
import React from 'react';
import logo from '../../assets/svg/pizza-shark-logo.svg';

export default function Header() {
  return (
    <div>
      <div className='logo'>
        <img src={logo} alt='Pizza Shark Logo' />
      </div>
    </div>
  );
}
