import React, { createContext, useContext, useReducer } from 'react';
import { reducer, initialState } from './reducer';

/**
 * Cart context
 */
export const Cart = createContext();

/**
 * Wraps the
 * @param {application} param0
 * @returns the context state
 */
const CartContext = ({ children }) => {
  /**
   * Initializes the reducer function
   */
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default CartContext;

export function useCartState() {
  return useContext(Cart);
}
