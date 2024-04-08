import { configureStore } from '@reduxjs/toolkit';


import displayReducer from './slices/display_slice'
import cartReducer from './slices/cart_slice'

export const store =configureStore({
  reducer: {
    display: displayReducer,
    cart:cartReducer
  },
});