import React, { useLayoutEffect } from 'react'; //
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function Layout() {
  const location = useLocation();

  useLayoutEffect(() => {
    // 1. Vérifiez s'il y a un fragment d'URL (ancre)
    if (location.hash) {
      // Retirez le '#' pour obtenir l'ID
      const elementId = location.hash.substring(1);
      const element = document.getElementById(elementId);

      // 2. Si l'élément existe, faites le défilement
      if (element) {
        // requestAnimationFrame assure un défilement fluide après le rendu
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        });
      }
    }
    // 3. Sinon (navigation normale sans ancre, comme Home -> ProjectDetail),
    // remontez en haut de la page.
    else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

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
