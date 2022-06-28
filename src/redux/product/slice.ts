import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PizzaBlockType } from '../../@types/types';
import { fetchPizzas } from './asyncActions';
import { PizzaSliceState, Status } from './types';

const initialState: PizzaSliceState = {
  products: [],
  status: Status.LOADING,
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<PizzaBlockType[]>) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING;
      state.products = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.products = action.payload;
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.products = [];
    });
  },
  // extraReducers: {
  //   [fetchPizzas.pending]: (state) => {
  //     state.status = 'loading';
  //     state.products = [];
  //   },
  //   [fetchPizzas.fulfilled]: (state, action) => {
  //     state.status = 'success';
  //     state.products = action.payload;
  //   },
  //   [fetchPizzas.rejected]: (state) => {
  //     state.status = 'error';
  //     state.products = [];
  //   },
  // },
});

export const { setProducts } = pizzasSlice.actions;

export default pizzasSlice.reducer;
