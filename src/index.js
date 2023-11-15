import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import './App.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
hydrateRoot(document.getElementById('root'), <App />);
