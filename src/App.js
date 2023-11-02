import './App.css';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar/Navbar';
const Terminal = lazy(() => import('./components/Terminal/Terminal'));
const Modal = lazy(() => import('./components/Modal/Modal'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  return (
    <div className='home'>
      <Navbar />
      <div className='sections'>
        <Terminal />
        <Suspense fallback={<div>Loading...</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <Modal />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
