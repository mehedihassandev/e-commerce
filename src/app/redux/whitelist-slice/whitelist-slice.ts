import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WhitelistState {
  whitelistedProducts: number[];
}

const initialState: WhitelistState = {
  whitelistedProducts: []
};

const whitelistSlice = createSlice({
  name: 'whitelist',
  initialState,
  reducers: {
    toggleWhitelist: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      if (state.whitelistedProducts.includes(productId)) {
        state.whitelistedProducts = state.whitelistedProducts.filter(
          (id) => id !== productId
        );
      } else {
        state.whitelistedProducts.push(productId);
      }
    }
  }
});

export const { toggleWhitelist } = whitelistSlice.actions;
export const whitelistReducer = whitelistSlice.reducer;
