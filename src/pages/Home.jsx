import React from 'react';
import Presentation from '../components/Présentation/presentation';

function Home() {
  return (
    <>
      <Presentation />

      <section id="parcours">
        {/* Contenu d'introduction */}
        <h2>Parcours</h2>
      </section>

      <section id="stack-technique">
        {/* Contenu d'introduction */}
        <h2>Stack Technique</h2>
      </section>

      <section id="soft-skills">
        {/* Contenu d'introduction */}
        <h2>Soft skills</h2>
      </section>

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
