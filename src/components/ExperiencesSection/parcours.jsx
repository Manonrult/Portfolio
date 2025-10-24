import parcoursData from '../../data/parcours.json';
import './parcours.scss';

import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Parcours = () => {
  const renderIcon = (type) => {
    switch (type) {
      case 'formation':
        return (
          <FaGraduationCap
            className="parcours-icon formation"
            title="Formation"
          />
        );
      case 'travail':
        // Icône de mallette/travail (ex: FaBriefcase)
        return (
          <FaBriefcase
            className="parcours-icon travail"
            title="Emploi / Expérience professionnelle"
          />
        );
      default:
        // Icône par défaut si le type n'est pas spécifié
        return <span className="parcours-icon dot"></span>;
    }
  };

  return (
    <div className="parcours-container">
      <h2 className="section-title">Parcours</h2>
      <ul className="parcours-list">
        {parcoursData.map((item, index) => (
          <li key={index} className="parcours-item">
            <div className="parcours-content">
              <span className="parcours-annee">
                {renderIcon(item.type)}
                <span className="year-text">
                  {item.annee[0]} {/* Affiche la première année (2025) */}
                  {
                    item.annee.length > 1 && (
                      <br />
                    ) /* Insère un saut de ligne si une deuxième année existe */
                  }
                  {item.annee.length > 1 && item.annee[1]}{' '}
                  {/* Affiche la deuxième année (2018) */}
                </span>
              </span>
              <span className="parcours-titre">{item.titre}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Parcours;
