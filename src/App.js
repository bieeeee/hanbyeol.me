import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';

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
