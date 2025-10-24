import React from 'react';
import '../components/ExperiencesSection/softSkills';

const Badge = ({ text, type }) => {
  return <div className={`badge ${type}`}>{text}</div>;
};

export default Badge;
