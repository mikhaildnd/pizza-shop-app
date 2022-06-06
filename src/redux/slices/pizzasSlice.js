import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzasStatus', async (params) => {
  const { category, sortBy, order, search, currentPage, limitProductsOnPage } = params;

  const address = `https://628bd2d1667aea3a3e36d84e.mockapi.io/products`;
  const requestParams = `?page=${currentPage}&limit=${limitProductsOnPage}&${category}&sortBy=${sortBy}&order=${order}&search=${search}`;
  const requestLink = `${address}${requestParams}`;

  const { data } = await axios.get(requestLink);

  return data;
});

const initialState = {
  products: [],
  status: 'loading',
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
      state.products = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.status = 'success';
      state.products = action.payload;
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'error';
      state.products = [];
    },
  },
});

export const { setProducts } = pizzasSlice.actions;

export default pizzasSlice.reducer;
