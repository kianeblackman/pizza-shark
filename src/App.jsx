//* Description: This is the main component of the application. It is the parent component of all other components.

// Import Statments
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import Pages
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import BookATable from './Pages/BookATable/BookATable';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';

// Import Components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

// Import Styles
import './scss/styles.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/book-a-table' element={<BookATable />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
