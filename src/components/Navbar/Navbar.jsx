import React from 'react';
import '../../Styles/Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <hr className='hr-heavy'/>
      <hr className='hr-light'/>
      <ul>
        <li>Home</li>
        <span>+</span>
        <li>Menu</li>
        <span>+</span>
        <li>Book a Table</li>
        <span>+</span>
        <li>Gallery</li>
        <span>+</span>
        <li>Contact</li>
      </ul>
      <hr className='hr-light'/>
      <hr className='hr-heavy'/>
    </div>
  );
}
