import React from 'react';

export default function ItemCard() {
  return (
    <div className='item-card'>
      <div className='item-details'>
        <h3>Item Name</h3>
        <p>Item Description</p>
        <h4>Item Category</h4>
      </div>
      <div className='item-img'>
        <img src='/' alt='/' />
      </div>
      <div className='item-card-btn'>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
