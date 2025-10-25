import React from 'react';
import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layout';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import ErrorPage from './pages/ErrorPage';

import './styles/main.scss';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/projet/:id',
        element: <ProjectDetail />,
      },

      {
        path: '*', // Le wildcard * attrape toutes les routes qui n'ont pas matché
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
