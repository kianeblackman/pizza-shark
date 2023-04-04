//* Description: button that links to the menu page

// Import Statments
import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderHereButton() {
  return (
    <div className='btn--order-here'>
      <Link to='/menu' className='order-here--link'>
        Order Here
      </Link>
    </div>
  );
}
