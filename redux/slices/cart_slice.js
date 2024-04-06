// displaySlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  navBarVariant: 'NavBar1', // Default navigation bar variant
  productCardVariant: 'ProductCard1', // Default product card variant
  catalogView: 'carousel', // Default catalog view mode
};

export const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    // Action to set the navigation bar variant
    setNavBarVariant: (state, action) => {
      state.navBarVariant = action.payload;
      console.log("NavBar variant updated in the store", state.navBarVariant);
    },
    // Action to set the product card variant
    setProductCardVariant: (state, action) => {
      state.productCardVariant = action.payload;
    },
    // Action to set the catalog view mode
    setCatalogView: (state, action) => {
      state.catalogView = action.payload;
    },
  },
});

// Export actions
export const { setNavBarVariant, setProductCardVariant, setCatalogView } = displaySlice.actions;

// Export the reducer
export default displaySlice.reducer;
