import './Styles/App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import logo from './Assets/svg/pizza-shark-logo.svg';

function App() {
  return (
    <div>
      <div className='logo'>
        <img src={logo} alt='Pizza Shark Logo' />
      </div>
      <Navbar />
    </div>
  );
}

export default App;
