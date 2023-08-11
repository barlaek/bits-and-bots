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
import Checkout from './pages/Checkout';
import NotFound from './Components/NotFound';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <CartContext>
          <Routes>
            <Route path="" element={<Layout />}>
              <Route index element={<Landing />} />
              <Route path="/home/:id" element={<Details />} />
              <Route path="/home" element={<Home />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CartContext>
      </UserContext.Provider>
    </div>
  );
}

export default App;
