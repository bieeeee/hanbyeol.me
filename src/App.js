import './App.css';
import React, { Suspense } from 'react';
import Page from './components/page'

function App() {
  return (
    <div className='home'>
      <Page />
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
