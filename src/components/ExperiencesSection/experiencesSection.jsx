import Parcours from './parcours';
import StackTechnique from './stackTechnique';
import SoftSkills from './softSkills';
import './experiencesSection.scss';

const ExperiencesSection = () => {
  return (
    <section className="experiences-section">
      <div className="experiences-content-wrapper">
        <div className="parcours-container-relative">
          <Parcours />
          <StackTechnique />
          <SoftSkills />
        </div>

        {/* Les Soft Skills restent en dessous */}
      </div>
    </section>
  );
};

export default ExperiencesSection;
