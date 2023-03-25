//* Description: This file exports the Navbar component

// Import Statments
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
      <hr className='hr-heavy' />
      <hr className='hr-light' />
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <span>+</span>
        <li>
          <Link to='/menu'>Menu</Link>
        </li>
        <span>+</span>
        <li>
          <Link to='/book-a-table'>Book a Table</Link>
        </li>
        <span>+</span>
        <li>
          <Link to='/gallery'>Gallery</Link>
        </li>
        <span>+</span>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <hr className='hr-light' />
      <hr className='hr-heavy' />
    </div>
  );
}
