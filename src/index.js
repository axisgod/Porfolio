import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppBar from './AppBar';
import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AppBar />
    <About/>
  </>
);
