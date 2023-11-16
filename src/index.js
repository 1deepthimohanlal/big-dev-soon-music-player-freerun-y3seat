import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import './style.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render((
   <BrowserRouter basename={process.env.PUBLIC_URL}>
     <App />
   </BrowserRouter>
), ...);
