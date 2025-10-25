import React from 'react';
import Presentation from '../components/Présentation/presentation';
import ExperiencesSection from '../components/ExperiencesSection/experiencesSection';
import ProjectCarousel from '../components/ProjectCarousel/projectCarousel';
import ContactForm from '../components/ContactForm/contactForm';
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
      <section id="contact" className="contact-section">
        {' '}
        {/* 👈 Ajoutez une classe pour le style de la section */}
        <ContactForm /> {/* 👈 Utilisez le composant */}
      </section>
    </>
  );
}

export default Home;
