import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './component/header';
import Floater from './component/flooter';
import Headerimag from './component/headerimg';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <Headerimag />
    <Floater />
  </>
);