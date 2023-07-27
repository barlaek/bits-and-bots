import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/games/:id" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
