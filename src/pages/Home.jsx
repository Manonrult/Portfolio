import React from 'react';
import Presentation from '../components/Présentation/presentation';
import ExperiencesSection from '../components/ExperiencesSection/experiencesSection';
import ProjectCarousel from '../components/ProjectCarousel/projectCarousel';
import projetsData from '../data/projets.json';

import './Home.scss';

function Home() {
  return (
    <>
      <Presentation />
      <ExperiencesSection />
      <section id="portfolio" className="portfolio-section">
        <h2 className="portfolio-section__title">Portfolio</h2>
        <ProjectCarousel projects={projetsData} />
      </section>

      {/* 🎯 Le lien a href="#contact" pointera ici */}
      <section id="contact">
        <h2>Contact</h2>
      </section>
    </>
  );
}

export default Home;
