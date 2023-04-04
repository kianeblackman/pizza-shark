//* Description: This file exports the Navbar component

// Import Statments
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
      <hr className='hr--heavy' />
      <hr className='hr--light' />
      <ul>
        <li>
          <Link to='/' className='navbar-link'>
            Home
          </Link>
        </li>
        <span>⨷</span>
        <li>
          <Link to='/menu' className='navbar-link'>
            Menu
          </Link>
        </li>
        <span>⨷</span>
        <li>
          <Link to='/book-a-table' className='navbar-link'>
            Book a Table
          </Link>
        </li>
        <span>⨷</span>
        <li>
          <Link to='/gallery' className='navbar-link'>
            Gallery
          </Link>
        </li>
        <span>⨷</span>
        <li>
          <Link to='/contact' className='navbar-link'>
            Contact
          </Link>
        </li>
      </ul>
      <hr className='hr--light' />
      <hr className='hr--heavy' />
    </div>
  );
}
