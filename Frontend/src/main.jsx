import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Your main component file
import './index.css'; // Add your CSS file if needed

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App /> {/* Don't wrap App with Router here, wrap it inside App.js instead */}
  </React.StrictMode>
);
