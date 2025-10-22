import './presentation.scss';
import profileImage from '../../assets/Group-profil.png';

function Presentation() {
  return (
    <section className="presentation-section">
      <div className="presentation__titles">
        <h1 className="presentation__name">Manon Ruault</h1>
        <h2 className="presentation__title">Développeuse web</h2>
      </div>
      <div className="presentation__content-body">
        <p className="presentation__text">
          Future développeuse web en reconversion, j'allie mon expertise
          pédagogique à une passion pour la création, le développement et la
          dynamique de projet.
          <br />
          Après huit années dédiées à l'enseignement en lycée professionnel,
          j'ai décidé de mettre ma rigueur, mon sens de l'organisation et ma
          capacité à structurer des projets au service d'un nouvel engagement
          professionnel.
          <br />
          L’élément déclencheur de ce changement a été la découverte de la
          création numérique : la possibilité de donner vie à des idées
          concrètes, la technicité constante du domaine et l'énergie stimulante
          de la dynamique de projet sont autant d'aspects qui m'ont
          immédiatement séduite. Je suis désormais entièrement engagée dans le
          développement, impatiente d'appliquer ces nouvelles connaissances à
          des défis réels.
        </p>
      </div>
      <div className="presentation__image-wrapper">
        <img
          src={profileImage}
          alt="Manon Ruault - photo de profil"
          className="presentation__image-grouped"
        />
      </div>
      <div className="presentation__button-wrapper">
        <a
          href="/CV-Manon-Ruault.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="presentation__button"
        >
          Consulter mon CV
        </a>
      </div>
    </section>
  );
}

export default Presentation;
