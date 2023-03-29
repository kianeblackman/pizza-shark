import React from 'react';

export default function MenuFilter() {
  return (
    <div>
      <h2>Menu</h2>
      <div className='filter-container'>
        <div className='refine-filter'>
          <button>Refine</button>
          <span>⇩</span>
        </div>
        <div className='sortBy-filter'>
          <button>Sort By</button>
          <span>⇩</span>
        </div>
      </div>
    </div>
  );
}
