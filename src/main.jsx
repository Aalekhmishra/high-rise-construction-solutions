import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import App from './App.jsx';
import './index.css';
//import {HelmetProvider} from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  <React.StrictMode>
    
      <BrowserRouter>
         <App />
      </BrowserRouter>
  
  </React.StrictMode>
);
