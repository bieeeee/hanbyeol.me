import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
const Home = lazy(() => import('./components/pages/Home'));
const Contact = lazy(() => import('./components/pages/Contact'));

function App() {
  return (
    <>
      <div className='background-image'>
        <Router>
          <Navbar />
          <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/contact' exact element={<Contact />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </>
  );
}

export default App;
