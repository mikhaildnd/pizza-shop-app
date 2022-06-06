import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = pizzasSlice.actions;

export default pizzasSlice.reducer;
