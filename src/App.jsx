import './Styles/App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import logo from './Assets/svg/pizza-shark-logo.svg';
import { Route, Routes } from 'react-router-dom';

import Menu from './Pages/Menu/Menu';
import BookATable from './Pages/BookATable/BookATable';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <div className='logo'>
        <img src={logo} alt='Pizza Shark Logo' />
      </div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/book-a-table' element={<BookATable />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <div className='green'>Hello</div>
      <div className='red'></div>
      <div className='blue'></div>
    </div>
  );
}

export default App;
