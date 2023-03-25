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
      <ul className='infinite-marquee'>
        <li>
          <AiFillPhone />
          <h3>0845 054 3500</h3>
        </li>
        <li>
          <AiFillHome />
          <h3>Hartlepool, Cleveland St TS24 7LH</h3>
        </li>
        <li>
          <AiFillMail />
          <h3>pizzashark@gmail.com</h3>
        </li>
        <li>
          <AiFillInstagram />
          <h3>@pizza_shark</h3>
        </li>
      </ul>
    </div>
  );
}
