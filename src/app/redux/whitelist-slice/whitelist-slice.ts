import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWhitelistItem } from '../../model/whitelist';

interface IWhitelistState {
  whitelistedProducts: IWhitelistItem[];
}

const initialState: IWhitelistState = {
  whitelistedProducts: []
};

const whitelistSlice = createSlice({
  name: 'whitelist',
  initialState,
  reducers: {
    addToWhitelist: (state, action: PayloadAction<IWhitelistItem>) => {
      const { id } = action.payload;

      const existingItem = state.whitelistedProducts.find(
        (item) => item.id === id
      );

      if (!existingItem) {
        state.whitelistedProducts.push(action.payload);
      }
    },
    removeFromWhitelist: (
      state,
      action: PayloadAction<{ whiteListItemId: number }>
    ) => {
      const updatedCartItems = state.whitelistedProducts?.filter(
        (whiteListItem: IWhitelistItem) =>
          whiteListItem.id !== action.payload.whiteListItemId
      );

      return {
        ...state,
        whitelistedProducts: updatedCartItems
      };
    },
    updateWhitelistItem: (state, action: PayloadAction<IWhitelistItem>) => {
      state.whitelistedProducts = state.whitelistedProducts.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );

      return {
        ...state,
        whitelistedProducts: state.whitelistedProducts
      };
    },
    resetWhitelist: (state) => {
      state.whitelistedProducts = [];
    },
    toggleWhitelist: (state, action: PayloadAction<IWhitelistItem>) => {
      const product = action.payload;

      const existingItem = state.whitelistedProducts.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        state.whitelistedProducts = state.whitelistedProducts.filter(
          (item) => item.id !== product.id
        );
      } else {
        state.whitelistedProducts.push(product);
      }
    },
    clearWhitelist: (state) => {
      state.whitelistedProducts = [];
    }
  }
});

export const {
  addToWhitelist,
  removeFromWhitelist,
  updateWhitelistItem,
  resetWhitelist,
  toggleWhitelist,
  clearWhitelist
} = whitelistSlice.actions;
export const whitelistReducer = whitelistSlice.reducer;
