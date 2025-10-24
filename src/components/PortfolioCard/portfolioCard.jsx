import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import './portfolioCard.scss'; // Importez le SCSS de la carte

/**
 * Composant de carte de projet pour le carrousel du Portfolio.
 * @param {object} props
 * @param {string} props.nom - Nom du projet.
 * @param {string} props.imageUrl - URL de l'image principale du projet.
 * @param {function} props.onClick - Fonction à exécuter au clic (pour ouvrir le détail).
 */
function PortfolioCard({ nom, imageUrl, onClick }) {
  return (
    <article className="portfolio-card" onClick={onClick}>
      <h3 className="portfolio-card__title">{nom}</h3>
      <div className="portfolio-card__image-container">
        {/* L'image du projet */}
        <img
          src={imageUrl}
          alt={`Capture d'écran de ${nom}`}
          className="portfolio-card__image"
        />

        {/* Le filtre gris transparent qui apparaît au survol */}
        <div className="portfolio-card__overlay">
          <FaEye
            className="portfolio-card__eye-icon"
            aria-label={`Voir le projet ${nom}`}
          />
        </div>
      </div>
    </article>
  );
}

export default PortfolioCard;
