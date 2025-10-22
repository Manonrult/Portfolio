import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function Layout() {
  return (
    <div class="layout-container">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
