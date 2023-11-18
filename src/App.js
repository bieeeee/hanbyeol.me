import './App.css';
import React, { Suspense, lazy } from 'react';
import {useTranslation} from 'react-i18next';
import Navbar from './components/Navbar/Navbar';
import Terminal from './components/Terminal/Terminal';
const Modal = lazy(() => import('./components/Modal/Modal'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  const { t } = useTranslation();
  return (
    <>
      <div className='home'>
        <Navbar t={t} />
        <div className='sections'>
          <Terminal t={t} />
          <Suspense fallback={<div>Loading...</div>}>
            <Modal t={t} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Contact t={t} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="loading...">
      <App />
    </Suspense>
  )
};
