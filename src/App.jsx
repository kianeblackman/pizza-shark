//* Description: This is the main component of the application. It is the parent component of all other components

// Import Statments
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import Pages
import Home from './pages/home/Home.jsx';
import Menu from './pages/menu/Menu.jsx';
import BookATable from './pages/bookATable/BookATable.jsx';
import Gallery from './pages/gallery/Gallery.jsx';
import Contact from './pages/contact/Contact.jsx';
import NotFound from './pages/notFound/NotFound.jsx';

// Import Components
import Header from './components/header/Header';
import Navbar from './components/header/Navbar';
import OpenOrClosedSign from './components/openOrClosedSign/OpenOrClosedSign';

// Import Styles
import './scss/styles.css';

export default function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <OpenOrClosedSign />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/book-a-table' element={<BookATable />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
