import './App.css';
import React, { Suspense } from 'react';

function App() {
  return (
    <div className='home'>
      <page />
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
