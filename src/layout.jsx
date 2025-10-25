import React, { useLayoutEffect } from 'react'; //
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function Layout() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="layout-container">
      <Header />

      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
