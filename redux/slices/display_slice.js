
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  navBarVariant: 'NavBar1', 
  productCardVariant: 'ProductCard2',
  catalogView: 'viewAll', 
};

export const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
   
    setNavBarVariant: (state, action) => {
      state.navBarVariant = action.payload;

    },
    
    setProductCardVariant: (state, action) => {
      state.productCardVariant = action.payload;
    },
    
    setCatalogView: (state, action) => {
      state.catalogView = action.payload;
    },
  },
});


export const { setNavBarVariant, setProductCardVariant, setCatalogView } = displaySlice.actions;


export default displaySlice.reducer;