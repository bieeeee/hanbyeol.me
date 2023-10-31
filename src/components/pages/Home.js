import '../../App.css';
import './Home.css';
import { Suspense, lazy } from 'react';
import Navbar from '../Navbar/Navbar';
import Terminal from '../Terminal/Terminal';
const Modal = lazy(() => import('../Modal/Modal'));
const Contact = lazy(() => import('../Contact/Contact'));

function Home() {
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

export default Home;
