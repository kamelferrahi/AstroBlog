import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login';
import Signup from './pages/signup';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
