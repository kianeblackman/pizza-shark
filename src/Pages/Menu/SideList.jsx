// Import Statements
import React from 'react';
import sideArr from '../../data/sideArr';

export default function ItemList() {
  const itemList = sideArr.map((sideArr, index) => (
    <div className='item-card' key={index}>
      <div className='item-details'>
        <h3>{sideArr.name}</h3>
        <p>{sideArr.description}</p>
        <h3>{sideArr.price}</h3>
        <h4>{sideArr.tag}</h4>
      </div>
      <div className='item-price'></div>
      <div>
        <button className='add-to-cart'>Add to Cart</button>
      </div>
    </div>
  ));
  return <div className='menu-grid'>{itemList}</div>;
}
