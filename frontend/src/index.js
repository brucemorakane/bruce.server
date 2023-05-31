import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/Home",
//     element: <div></div>,
//   },
//   {
//     path: "/About",
//     element: <div></div>,
//   },
//   {
//     path: "/Media",
//     element: <div></div>,
//   },
//   {
//     path: "/Fishman",
//     element: <div></div>,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);

