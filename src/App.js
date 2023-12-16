import './App.css';
import React, { Suspense, lazy } from 'react';
import i18n from './i18n';
import {I18nextProvider, useTranslation} from 'react-i18next';
import Navbar from './components/Navbar/Navbar';
import Terminal from './components/Terminal/Terminal';
const Modal = lazy(() => import('./components/Modal/Modal'));
const Contact = lazy(() => import('./components/Contact/Contact'));


function App() {
  const { t } = useTranslation();
  return (
  <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      <div className='home'>
        <Navbar t={t} i18n={i18n} />
        <div className='sections'>
          <Terminal t={t} i18n={i18n} />
          <Suspense fallback={<div>Loading...</div>}>
            <Modal t={t} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Contact t={t} />
          </Suspense>
        </div>
      </div>
    </I18nextProvider>
  );
}

export default function WrappedApp() {
  return (
    <Suspense>
      <App />
    </Suspense>
  )
};
