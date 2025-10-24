import React, { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import './collapse.scss'; // Importez le SCSS

/**
 * Composant réutilisable pour afficher des informations dépliables.
 * @param {object} props
 * @param {string} props.title - Titre de la section.
 * @param {string | React.ReactNode} props.content - Contenu de la section.
 */
function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état ouvert/fermé
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggleCollapse}>
        <h3 className="collapse__title">{title}</h3>
        {/* L'icône change de direction et tourne grâce au CSS si 'isOpen' est true */}
        <FaChevronUp className={`collapse__icon ${isOpen ? 'open' : ''}`} />
      </div>
      {/* Le contenu est rendu avec une classe pour l'animation/affichage CSS */}
      <div className={`collapse__content-wrapper ${isOpen ? 'open' : ''}`}>
        <div className="collapse__content">{content}</div>
      </div>
    </div>
  );
}

export default Collapse;
