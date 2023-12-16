import './App.css';
import React, { Suspense } from 'react';
import { Home } from './components/Home';

function App() {
  return (
    <div className='home'>
      <Home />
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="loading...">
      <App />
    </Suspense>
  )
};
