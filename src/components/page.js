import '../App.css';
import React, { Suspense, lazy } from 'react';
import Navbar from './Navbar/Navbar';
import Terminal from './Terminal/Terminal';
const Modal = lazy(() => import('./Modal/Modal'));
const Contact = lazy(() => import('./Contact/Contact'));

const page = ({ t, i18n }) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar t={t} i18n={i18n} />
      </Suspense>
      <div className='sections'>
        <Terminal t={t} i18n={i18n} />
        <Suspense fallback={<div>Loading...</div>}>
          <Modal t={t} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Contact t={t} />
        </Suspense>
      </div>
    </>
  )
}

export default page
