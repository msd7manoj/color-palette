import React from 'react';
// import './App.scss';
import { BrowserRouter } from "react-router-dom";
import MainLayout from './layouts/MainLayout/MainLayout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
