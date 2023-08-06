import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Details from './pages/Details';
import LandingLayout from './pages/LandingLayout';
import Landing from './pages/Landing';

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<Details />} />
          <Route path='/landing' element={<Routes>
            <Route path='' element={<LandingLayout />}>
              <Route path='/login' element={<Landing />}/>
            </Route>
          </Routes>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
