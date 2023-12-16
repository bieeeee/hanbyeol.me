import React from 'react';
import ReactDOM from 'react-dom';
// import { I18nextProvider } from 'react-i18next';
import WrappedApp from './App';
import './App.css';
// import i18n from './i18n';

ReactDOM.hydrate(
    <WrappedApp />,
  document.getElementById('root'));
