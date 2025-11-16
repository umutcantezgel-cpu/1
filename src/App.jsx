import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import MenuPage from '@/pages/MenuPage';
import AboutPage from '@/pages/AboutPage';
import GalleryPage from '@/pages/GalleryPage';
import ReservationPage from '@/pages/ReservationPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/speisekarte" element={<MenuPage />} />
          <Route path="/ueber-uns" element={<AboutPage />} />
          <Route path="/galerie" element={<GalleryPage />} />
          <Route path="/reservierung" element={<ReservationPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
