import './App.css';
import React, { Suspense, lazy } from 'react';
import {useTranslation} from 'react-i18next';
import Navbar from './components/Navbar/Navbar';
import Terminal from './components/Terminal/Terminal';
const Modal = lazy(() => import('./components/Modal/Modal'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  const { t, i18n } = useTranslation();
  return (
    // <div className='home'>
    //   <page />
    // </div>
    <page>
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
  </page>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="loading...">
      <App />
    </Suspense>
  )
};
