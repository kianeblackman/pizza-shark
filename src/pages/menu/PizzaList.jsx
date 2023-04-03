// Import Statements
import React from 'react';
import pizzaArr from '../../data/pizzaArr';

export default function PizzaList() {
  const itemList = pizzaArr.map((pizzaArr, index) => (
    <div className='item-card' key={index}>
      <div className='item-details'>
        <div className='item-main-container'>
          <div className='item-main-details'>
            <h3 className='item-tag'>{pizzaArr.type}</h3>
            <img src={pizzaArr.image} alt={pizzaArr.alt} />
            <h3 className='item-name'>{pizzaArr.name}</h3>
            <p className='item-description'>{pizzaArr.description}</p>
          </div>
        </div>
        <div className='item-sub-details'>
          <h3 className='item-price'>{pizzaArr.price}</h3>
        </div>
      </div>
      <div>
        <button className='add-to-cart'>Add to Cart</button>
      </div>
    </div>
  ));
  return <div className='menu-grid'>{itemList}</div>;
}
