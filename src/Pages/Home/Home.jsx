import React from 'react';
import OrderHereButton from '../../Components/Buttons/OrderHereButton';

export default function Home() {
  return (
    <div className='home-page'>
      <div className=''>
        <h1>You're gonna need a bigger belt.</h1>
        <OrderHereButton />
      </div>
    </div>
  );
}
