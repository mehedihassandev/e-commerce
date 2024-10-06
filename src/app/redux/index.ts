import {
  addToCart,
  cartReducer,
  clearCart,
  removeFromCart,
  restCart,
  updateCartItem
} from './cart/cart-slice';
import { productReducer } from './product-slice/product-slice';
import {
  addToWhitelist,
  clearWhitelist,
  removeFromWhitelist,
  resetWhitelist,
  toggleWhitelist,
  updateWhitelistItem,
  whitelistReducer
} from './whitelist-slice/whitelist-slice';

export {
  addToCart,
  addToWhitelist,
  cartReducer,
  clearCart,
  clearWhitelist,
  productReducer,
  removeFromCart,
  removeFromWhitelist,
  resetWhitelist,
  restCart,
  toggleWhitelist,
  updateCartItem,
  updateWhitelistItem,
  whitelistReducer
};
