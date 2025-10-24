import stackData from '../../data/stackTechnique.json';
import './stackTechnique.scss';

const StackTechnique = () => {
  return (
    <div className="stack-technique-container">
      <h2 className="section-subtitle">Stack technique</h2>

      {/* Mappage sur toutes les catégories (Technologies, Outils, Connaissances) */}
      {stackData.map((section, index) => (
        <div key={index} className="stack-category">
          <h3 className="category-title">{section.categorie}</h3>

          {/* Cas 1 : Type 'logos' (Technologies et Outils) */}
          {(section.type === 'logos' || !section.type) && (
            <div className="logos-grid">
              {section.items.map((item) => (
                <div key={item.nom} className="logo-item">
                  <img
                    src={item.logo_url}
                    alt={`${item.nom} logo`}
                    className="logo-img"
                  />
                  <span className="logo-name">{item.nom}</span>
                </div>
              ))}
            </div>
          )}

          {/* Cas 2 : Type 'liste' (Connaissances) */}
          {section.type === 'liste' && (
            <ul className="knowledge-list">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default StackTechnique;
