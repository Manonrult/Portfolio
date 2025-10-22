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
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/', // Rendra <Home /> DANS l'<Outlet /> du Layout
        element: <Home />,
      },
      {
        path: '/projet/:id', // Rendra <ProjectDetail /> DANS l'<Outlet /> du Layout
        element: <ProjectDetail />,
      },
    ],
  },
]);

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
