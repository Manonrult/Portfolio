import React from 'react';
import Badge from '../badge';
import './softSkills.scss';

const SoftSkills = () => {
  const softSkillsData = [
    { titre: "Capacité d'apprentissage" },
    { titre: 'Collaboration' },
    { titre: 'Autonomie' },
    { titre: 'Organisation' },
    { titre: "Esprit d'analyse" },
    { titre: 'Méthodologie de projet' },
  ];

  return (
    <div className="soft-skills-section">
      <h2 className="section-title">Soft skills</h2>
      <div className="soft-skills-grid">
        {softSkillsData.map((skill, index) => (
          <Badge key={index} text={skill.titre} type="unified" />
        ))}
      </div>
    </div>
  );
};

export default SoftSkills;
