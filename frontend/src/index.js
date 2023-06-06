import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import router from './Routes';
// import { RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);

