import { combineReducers } from '@reduxjs/toolkit';
import { whitelistReducer } from './whitelist-slice/whitelist-slice';

export const rootReducer = combineReducers({
  whitelistReducer
});
