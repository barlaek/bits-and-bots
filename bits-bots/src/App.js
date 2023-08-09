import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Details from './pages/Details';
import Landing from './pages/Landing';
import Registration from './pages/Registration';
import { UserContext } from './Utilities/Context/UserContext';
import CartContext from './Utilities/Context/CartContext';
import Cart from './pages/Cart';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser);
  return (
    <div>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <CartContext>
          <Routes>
              <Route path="" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/:id" element={<Details />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="/registration" element={<Registration />} />
                <Route path='/cart' element={<Cart />} />
              </Route>
            </Routes>
        </CartContext>
      </UserContext.Provider>
    </div>
  );
}

export default App;
