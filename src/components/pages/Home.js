import React, { lazy, Suspense } from 'react';
import '../../App.css';
const Modal = lazy(() => import('../Modal/Modal'));
const Terminal = lazy(() => import('../Terminal/Terminal'));


function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Terminal />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Modal />
      </Suspense>
    </>
  );
}

export default Home;
