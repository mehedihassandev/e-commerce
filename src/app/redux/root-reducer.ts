import { combineReducers } from '@reduxjs/toolkit';
import { productReducer } from './product-slice/product-slice';
import { whitelistReducer } from './whitelist-slice/whitelist-slice';

export const rootReducer = combineReducers({
  whitelistReducer,
  productReducer
});
