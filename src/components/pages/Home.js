import React, { lazy, Suspense } from 'react';
import '../../App.css';
import Modal from '../Modal/Modal';

const Terminal = lazy(() => import('../Terminal'));

function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Terminal />
      </Suspense>
      <Modal />
    </>
  );
}

export default Home;
