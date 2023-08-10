export const initialState = { cart: [], total: 0 };

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

      let removeCart = { ...action.payload };
      console.log()
      if (localStorage.getItem('cart') == null) {
        localStorage.setItem('cart', '[]');
      }

      let storedCart = JSON.parse(localStorage.getItem('cart'));
      console.log(storedCart)
      storedCart.splice(removeCart, 1);
      localStorage.setItem('cart', JSON.stringify(storedCart));

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
