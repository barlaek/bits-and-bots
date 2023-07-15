import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Layout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
