import './App.css';
import { Suspense, lazy } from 'react';
import bg from './bg.jpg';
import Navbar from './components/Navbar/Navbar';
import Terminal from './components/Terminal/Terminal';
const Modal = lazy(() => import('./components/Modal/Modal'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  return (
    <div className='home'>
      <Navbar />
      <div className='sections' style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}} loading="lazy">
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
