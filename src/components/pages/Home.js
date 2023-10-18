import React, { lazy, Suspense } from 'react';
import '../../App.css';
const Terminal = lazy(() => import('../Terminal'));
const Modal = lazy(() => import('../Modal/Modal'));


function Home() {
  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Terminal />
      </Suspense> */}
      <Modal />
    </>
  );
}

export default Home;
