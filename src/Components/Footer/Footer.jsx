import React from 'react';
import {
  AiFillPhone,
  AiFillHome,
  AiFillMail,
  AiFillInstagram,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='marquee'>
        <div className='contact-container'>
          <AiFillPhone />
          <h3>0845 054 3500</h3>
        </div>
        <div className='contact-container'>
          <AiFillHome />
          <h3>Hartlepool, Cleveland St TS24 7LH</h3>
        </div>
        <div className='contact-container'>
          <AiFillMail />
          <h3>pizzashark@gmail.com</h3>
        </div>
        <div className='contact-container'>
          <AiFillInstagram />
          <h3>@pizza_shark</h3>
        </div>
      </div>
    </div>
  );
}
