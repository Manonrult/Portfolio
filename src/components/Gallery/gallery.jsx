// src/components/Gallery/Gallery.jsx

import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './gallery.scss';

// Durée de l'intervalle en millisecondes (5 secondes)
const AUTOPLAY_INTERVAL = 3000;

/**
 * Composant de galerie d'images avec carrousel et défilement automatique.
 * @param {object} props
 * @param {Array<object>} props.images - Liste des objets image { url, description }.
 */
function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  if (totalImages === 0) {
    return <div className="gallery">Aucune image disponible.</div>;
  }

  // Fonction de navigation vers l'image suivante
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  // Fonction de navigation vers l'image précédente
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  // Logique de défilement automatique
  useEffect(() => {
    // Si une seule image, on ne démarre pas l'intervalle
    if (totalImages <= 1) {
      return;
    }

    // Configure l'intervalle pour appeler handleNext toutes les 5 secondes
    const intervalId = setInterval(handleNext, AUTOPLAY_INTERVAL);

    // Fonction de nettoyage: s'exécute lors du démontage du composant
    return () => {
      clearInterval(intervalId);
    };
  }, [totalImages]); // Le tableau de dépendances garantit que l'effet s'exécute une seule fois au montage (car totalImages est constant)

  return (
    <div className="gallery">
      {/* Image courante */}
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].description}
        className="gallery__image"
      />

      {/* Navigation (seulement si plus d'une image) */}
      {totalImages > 1 && (
        <>
          <button
            className="gallery__nav-button gallery__nav-button--prev"
            onClick={handlePrev}
            aria-label="Image précédente"
          >
            <FaChevronLeft />
          </button>
          <button
            className="gallery__nav-button gallery__nav-button--next"
            onClick={handleNext}
            aria-label="Image suivante"
          >
            <FaChevronRight />
          </button>
          {/* Compteur d'images */}
        </>
      )}
    </div>
  );
}

export default Gallery;
