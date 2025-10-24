import React from 'react';
import Presentation from '../components/Présentation/presentation';
import ExperiencesSection from '../components/ExperiencesSection/experiencesSection';

function Home() {
  return (
    <>
      <Presentation />
      <ExperiencesSection />

      {/* 🎯 Le lien a href="#portfolio" pointera ici */}
      <section id="portfolio">
        <h2>Portfolio</h2>
        {/* Contenu du Portfolio */}
      </section>

      {/* 🎯 Le lien a href="#contact" pointera ici */}
      <section id="contact">
        <h2>Contact</h2>
      </section>
    </>
  );
}

export default Home;
