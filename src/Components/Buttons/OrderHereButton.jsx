import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderHereButton() {
  return (
    <div className='order-here-button'>
      <button>
        <Link to='/menu'>Order Here</Link>
      </button>
    </div>
  );
}
