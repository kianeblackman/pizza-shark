//* Description: This is the main component of the application. It is the parent component of all other components.

// Import Statments
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import Pages
import Home from './pages/home/Home.jsx';
import Menu from './pages/menu/Menu';
import BookATable from './pages/bookATable/BookATable';
import Gallery from './pages/gallery/Gallery';
import Contact from './pages/contact/Contact';
import NotFound from './pages/notFound/NotFound';

// Import Components
import Header from './Components/Header/Header';
import Navbar from './Components/Header/Navbar';
import OpenOrClosedSign from './Components/OpenOrClosedSign/OpenOrClosedSign';

// Import Styles
import './scss/styles.css';

function App() {
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
      {/* <Footer /> */}
    </div>
  );
}

export default App;
