import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem } from '../../model/cart';

interface ICartState {
  cartItems: ICartItem[];
}

const initialState: ICartState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    restCart: () => initialState,
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const { id } = action.payload;

      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === id
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      }

      return {
        ...state,
        cartItems: existingItem
          ? state.cartItems
          : [...state.cartItems, action.payload]
      };
    },
    removeFromCart: (state, action: PayloadAction<{ cartItemId: number }>) => {
      const updatedCartItems = state.cartItems?.filter(
        (cartItem: ICartItem) => cartItem.id !== action.payload.cartItemId
      );

      return {
        ...state,
        cartItems: updatedCartItems
      };
    },
    updateCartItem: (state, action: PayloadAction<ICartItem>) => {
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: action.payload.quantity }
            : cartItem
        )
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        cartItems: []
      };
    }
  }
});

export const {
  addToCart,
  restCart,
  clearCart,
  removeFromCart,
  updateCartItem
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
