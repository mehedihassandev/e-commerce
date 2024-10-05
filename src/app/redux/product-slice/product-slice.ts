import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../model/product';

interface ProductState {
  products: IProduct[];
}

const initialState: ProductState = {
  products: []
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    }
  }
});

export const { setProducts } = productSlice.actions;
export const productReducer = productSlice.reducer;
