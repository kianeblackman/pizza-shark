import React from 'react';

export default function MenuFilter() {
  return (
    <div className='menu-filter-bar'>
      <h2>Menu</h2>
      <div className='filter-container'>
        <div className='refine-filter'>
          <p>Refine</p>
          <span>⇩</span>
        </div>
        <div className='sortBy-filter'>
          <p>Sort By</p>
          <span>⇩</span>
        </div>
      </div>
    </div>
  );
}
