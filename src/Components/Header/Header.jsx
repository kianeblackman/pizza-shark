// Import Statments
import React from 'react';
import logo from '../../Assets/svg/logo.svg';

export default function Header() {
  return (
    <div>
      <div className='logo'>
        <img src={logo} alt='Pizza Shark Logo' />
      </div>
    </div>
  );
}
