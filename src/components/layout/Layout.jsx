import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

const Layout = () => (
  <div className="bg-brand-navy-950 text-white min-h-screen">
    <ScrollToTop />
    <a href="#main-content" className="skip-to-main">
      Zum Inhalt springen
    </a>
    <Header />
    <div id="main-content" className="pt-24">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Layout;
