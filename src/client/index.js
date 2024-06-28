//this file is the bridge between the component I created in the App.js file and the web browser

import React from 'react';
import { createRoot } from 'react-dom/client';
//import { Provider } from 'react-redux';
import App from './App.jsx';
//import store from './store';




document.addEventListener('DOMContentLoaded', () => { 
  const root = createRoot(document.getElementById('root'))
  root.render(
    <App />
  );
})

