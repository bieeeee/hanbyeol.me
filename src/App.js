import './App.css';
import { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/pages/Home'));
const Contact = lazy(() => import('./components/pages/Contact'));

function App() {
  return (
    <>
      <div className='background-image'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/contact' exact element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
