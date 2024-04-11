import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {

     
      
      const { id, name, price, image } = action.payload;
  
      const existingIndex = state.items.findIndex(item => item.id === id);

      if (existingIndex >= 0) {
        state.items[existingIndex].quantity += 1;
        state.items[existingIndex].totalPrice = state.items[existingIndex].price * state.items[existingIndex].quantity;
      } else {
        state.items.push({ id, name, price, quantity: 1, totalPrice: price, image });
      }

      state.totalQuantity += 1;
      state.totalPrice += price;
    },

    removeItemFromCart: (state, action) => {
      const { id, name, price, image }= action.payload;
      const existingIndex = state.items.findIndex(item => item.id === id);

      if (existingIndex >= 0) {
        const item = state.items[existingIndex];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.totalPrice;
        state.items.splice(existingIndex, 1);
      }
    },

    reduceItemQuantity: (state, action) => {
      const { id, name, price, image } = action.payload;
      const existingIndex = state.items.findIndex(item => item.id === id);
      
      if (existingIndex >= 0 && state.items[existingIndex].quantity > 0) {
        state.items[existingIndex].quantity -= 1;
        state.items[existingIndex].totalPrice -= state.items[existingIndex].price; 
        
        if (state.items[existingIndex].quantity === 0) {
          state.items.splice(existingIndex, 1);
        }
        
        state.totalQuantity -= 1;
        state.totalPrice -= price; 
      }
    },
    
    
  },
});


export const { addItemToCart, removeItemFromCart, reduceItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
