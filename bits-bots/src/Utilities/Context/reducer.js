export const initialState = { cart: [], total: 0 };

/**
 * Reducer function
 * @param {cartContext} state
 * @param {dispatch} action
 * @returns a dispatch function updates the cartContext
 */
export const reducer = (state, action) => {
  let productIndex;
  let newTotal;
  let cart;

  switch (action.type) {
    case 'addProduct':
      cart = [...state.cart];
      productIndex = cart.findIndex(
        (product) => product.id === action.payload.id,
      );

      let localCart = { ...action.payload };

      if (localStorage.getItem('cart') == null) {
        localStorage.setItem('cart', '[]');
      }

      let oldCart = JSON.parse(localStorage.getItem('cart'));
      oldCart.push(localCart);
      localStorage.setItem('cart', JSON.stringify(oldCart));

      if (productIndex === -1) {
        cart.push({ ...action.payload, quantity: 1 });
      } else {
        cart = [
          ...cart.slice(0, productIndex),
          { ...cart[productIndex], quantity: cart[productIndex].quantity + 1 },
          ...cart.slice(productIndex + 1),
        ];
      }

      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.prices * product.quantity;
        return currentTotal;
      }, 0);
      return { ...state, cart: cart, total: newTotal };

    case 'removeProduct':
      cart = [...state.cart];
      productIndex = cart.findIndex(
        (product) => product.id === action.payload.id,
      );
      if (productIndex !== -1) {
        if (cart[productIndex].quantity > 1) {
          cart = [
            ...cart.slice(0, productIndex),
            {
              ...cart[productIndex],
              quantity: cart[productIndex].quantity - 1,
            },
            ...cart.slice(productIndex + 1),
          ];
        } else {
          cart = [
            ...cart.slice(0, productIndex),
            ...cart.slice(productIndex + 1),
          ];
        }
      }

      console.log();
      if (localStorage.getItem('cart') == null) {
        localStorage.setItem('cart', '[]');
      }

      let storedCart = JSON.parse(localStorage.getItem('cart'));
      storedCart = [
        ...storedCart.slice(0, productIndex),
        ...storedCart.slice(productIndex + 1),
      ];
      localStorage.setItem('cart', JSON.stringify(storedCart));

      window.location.reload();

      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);
      return { ...state, cart: cart, total: newTotal };

    case 'clearCart':
      return { cart: [], total: 0 };

    default:
      return state;
  }
};
