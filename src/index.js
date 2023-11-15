import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
hydrateRoot(document.getElementById('root'), <App />);
