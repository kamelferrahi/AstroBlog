import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import Settings from './pages/settings';
import Article from './pages/article';
import E404 from "./pages/E404";

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Signup />
  },
  {
    path: '/home',
    element: <Home />
  }, {
    path: '/settings',
    element: <Settings />
  }, {
    path: '/article/:articleId',
    element: <Article />
  },
  , {
    path: '/E404',
    element: <E404 />
  },
  {
    path: "/*",
    element: <E404 />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
