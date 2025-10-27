// src/pages/ProjectDetail.jsx

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Collapse from '../components/Collapse/collapse'; // 💡 Importez Collapse
import Gallery from '../components/Gallery/gallery'; // 💡 Importez Gallery
import projetsData from '../data/projets.json'; // 💡 Importez les données
import { FaGithub } from 'react-icons/fa';
import './projectDetail.scss'; // 💡 Importez le SCSS

/**
 * Fonction utilitaire pour trouver le projet par son 'slug' (nom du projet en URL)
 */
const findProjectBySlug = (slug) => {
  // Le slug est la version en minuscule et tirets du nom (ex: "booki")
  return projetsData.find(
    (projet) => projet.nom.toLowerCase().replace(/\s/g, '-') === slug
  );
};

function ProjectDetail() {
  // Récupère le paramètre 'id' (qui est le slug du projet) de l'URL
  const { id } = useParams();
  const projet = findProjectBySlug(id);

  // Si le projet n'est pas trouvé, rediriger vers la page d'erreur ou la page d'accueil
  if (!projet) {
    return <Navigate to="/404" />; // Ou <ErrorPage /> si l'erreur est gérée ici
  }

  // Destruction des propriétés pour une utilisation facile
  const {
    nom,
    client,
    date,
    lien_github,
    images,
    contexte,
    objectif,
    stack_technique,
    competences_developpees,
    resultats_et_impact,
    perspectives_amelioration,
  } = projet;

  // Liste des propriétés et de leurs titres pour le rendu des Collapses
  const collapsesData = [
    { title: 'Contexte', content: contexte },
    { title: 'Objectif', content: objectif },
    { title: 'Stack technique', content: stack_technique },
    { title: 'Compétences développées', content: competences_developpees },
    { title: 'Résultats et Impacts', content: resultats_et_impact },
    {
      title: "Perspectives d'amélioration",
      content: perspectives_amelioration,
    },
  ];

  return (
    <main className="project-detail">
      {/* 1. Bannière (couleur primary) */}
      <section className="project-detail__banner">
        <div className="project-detail__info-group">
          <h1 className="project-detail__title">{nom}</h1>
          <p className="project-detail__client"> {client}</p>
          <p className="project-detail__date">Date: {date}</p>
        </div>
        <a
          href={lien_github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-detail__github-link"
          aria-label={`Voir le code source de ${nom} sur GitHub`}
        >
          <FaGithub /> GitHub
        </a>
      </section>

      {/* 2. Carrousel d'images */}
      <Gallery images={images} />

      {/* 3. Section des Collapses */}
      <section className="project-detail__collapses">
        {collapsesData.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </section>
    </main>
  );
}

export default ProjectDetail;
