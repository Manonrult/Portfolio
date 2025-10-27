import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layout';

import './styles/main.scss';

const Home = lazy(() => import('./pages/Home'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<div>Chargement de la page d'accueil...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/projet/:id',
        element: (
          <Suspense fallback={<div>Chargement du projet...</div>}>
            <ProjectDetail />
          </Suspense>
        ),
      },

      {
        path: '*', // Le wildcard * attrape toutes les routes qui n'ont pas matché
        element: (
          <Suspense fallback={<div>Chargement de la page...</div>}>
            <ErrorPage />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
