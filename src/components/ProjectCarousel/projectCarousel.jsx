import React, { useState } from 'react';
import PortfolioCard from '../PortfolioCard/portfolioCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Flèches
import { useNavigate } from 'react-router-dom';
import './projectCarousel.scss';

// Nombre de cartes à afficher simultanément sur Desktop
const CARDS_PER_VIEW_DESKTOP = 3;

/**
 * Composant Carrousel pour les projets.
 * Affiche 3 cartes à la fois sur desktop, avec navigation en boucle.
 */
function ProjectCarousel({ projects }) {
  // Index de départ du premier projet affiché
  const [startIndex, setStartIndex] = useState(0);
  const totalProjects = projects.length;
  const navigate = useNavigate();

  // Fonction pour gérer le clic sur la flèche de droite (Suivant)
  const handleNext = () => {
    // Si nous sommes au dernier projet (ou moins de 3 projets avant la fin),
    // on revient au début (index 0). Sinon, on avance d'une position.
    setStartIndex((prevIndex) => (prevIndex + 1) % totalProjects);
  };

  // Fonction pour gérer le clic sur la flèche de gauche (Précédent)
  const handlePrev = () => {
    // Si nous sommes au premier projet (index 0), on revient au dernier projet.
    // Sinon, on recule d'une position.
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + totalProjects) % totalProjects
    );
  };

  // --- Logique pour afficher les cartes en boucle infinie (Côté visuel) ---

  // 1. Créer une liste de tous les projets à afficher dans le carrousel
  // On doit créer une liste qui contient les 3 projets à partir de startIndex,
  // en gérant le 'wrap around' (la boucle) si on arrive à la fin du tableau.
  const visibleProjects = [];
  for (let i = 0; i < CARDS_PER_VIEW_DESKTOP; i++) {
    const projectIndex = (startIndex + i) % totalProjects;
    visibleProjects.push(projects[projectIndex]);
  }

  // Fonction de gestion du clic (similaire à la carte précédente)
  const handleCardClick = (projectName) => {
    const projectId = projectName.toLowerCase().replace(/\s/g, '-');
    navigate(`/projet/${projectId}`);
  };

  // Affichage du composant
  return (
    <div className="carousel-container">
      {/* Bouton Précédent */}
      <button
        className="carousel-button carousel-button--prev"
        onClick={handlePrev}
        aria-label="Projet précédent"
      >
        <FaChevronLeft />
      </button>

      {/* Conteneur principal du Carrousel */}
      <div className="carousel-content">
        {/* Sur Mobile (<= 768px), on affiche un seul projet à la fois (ProjectCard.jsx gère ça via CSS) */}
        {/* Sur Desktop (> 768px), on affiche 3 cartes via la boucle 'visibleProjects' */}

        {visibleProjects.map((projet) => {
          // Trouver l'URL de l'image principale
          const imageUrl =
            projet.images.find((img) => img.numero === 1)?.url || '';

          return (
            <PortfolioCard
              key={projet.nom + Math.random()} // Key doit être unique. Ajout de Math.random() pour forcer le re-rendu lors de la boucle
              nom={projet.nom}
              imageUrl={imageUrl}
              onClick={() => handleCardClick(projet.nom)}
            />
          );
        })}
      </div>

      {/* Bouton Suivant */}
      <button
        className="carousel-button carousel-button--next"
        onClick={handleNext}
        aria-label="Projet suivant"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default ProjectCarousel;
