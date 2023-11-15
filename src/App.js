import './App.css';
import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar/Navbar';
import Terminal from './components/Terminal/Terminal';
const Modal = lazy(() => import('./components/Modal/Modal'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  return (
    <div className='home'>
      <Navbar />
      <div className='sections'>
        <Terminal />
        <Suspense fallback={<div>Loading...</div>}>
          <Modal />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
