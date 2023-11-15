import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.hydrate(
//   <App />
// );

ReactDOM.hydrate(<App />, document.getElementById('root'));
