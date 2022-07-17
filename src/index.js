import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import Main from './main';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);


