import React from 'react';

export default function ItemCard() {
  let itemArr = [
    {
      name: 'Pizza Shark',
      description: 'A pizza with a shark fin on top',
      category: 'Pizza',
      price: 10.99,
      img: 'https://i.imgur.com/4ZQ3Z9M.png',
    },
    {
      name: 'asdfasfdasdf',
      description: 'A pizza with a shark finasasgdfsgadfg on top',
      category: 'Piagagasgzza',
      price: 10.99,
      img: 'https://i.imgur.com/4ZQ3Z9M.png',
    },
    {
      name: 'asdfasfdasdf',
      description: 'A pizza with a shark finasasgdfsgadfg on top',
      category: 'Piagagasgzza',
      price: 10.99,
      img: 'https://i.imgur.com/4ZQ3Z9M.png',
    },
    {
      name: 'asdfasfdasdf',
      description: 'A pizza with a shark finasasgdfsgadfg on top',
      category: 'Piagagasgzza',
      price: 10.99,
      img: 'https://i.imgur.com/4ZQ3Z9M.png',
    },
  ];
  const itemList = itemArr.map((itemArr) => (
    <div className='item-card'>
      <div className='item-details'>
        <h3>{itemArr.name}</h3>
        <p>{itemArr.description}</p>
        <h4>{itemArr.category}</h4>
      </div>
    </div>
  ));
  return (
    <div className='item-card'>
      <div>{itemList}</div>
    </div>
  );
}
