import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';

function App() {
  return (
    <>
      {/* <section id="up"></section>
      <section id="down"></section>
      <section id="right"></section>
      <section id="left"></section> */}

      <div className='background-image'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
