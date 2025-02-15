import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// import Button from './Button.jsx'
// Change from BrowserRouter to HashRouter in your App.jsx
// import { HashRouter as Router } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Button /> */}
  </React.StrictMode>
);
