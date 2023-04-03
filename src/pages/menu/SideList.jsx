// Import Statements
import React from 'react';
import sideArr from '../../data/sideArr';
import icon from '../../assets/svg/vector.svg';

export default function ItemList() {
  const itemList = sideArr.map((sideArr, index) => (
    <div className='item-card' key={index}>
      <div className='item-details'>
        <div className='item-main-container'>
          <div className='item-main-details'>
            <h3 className='item-tag'>{sideArr.type}</h3>
            <img src={icon} alt='icon' />
            <h3 className='item-name'>{sideArr.name}</h3>
            <p className='item-description'>{sideArr.description}</p>
          </div>
        </div>
        <div className='item-sub-details'>
          <h3 className='item-price'>{sideArr.price}</h3>
        </div>
      </div>
      <div>
        <button className='add-to-cart'>Add to Cart</button>
      </div>
    </div>
  ));
  return <div className='menu-grid'>{itemList}</div>;
}
