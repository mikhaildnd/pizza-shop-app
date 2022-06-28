import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItemType } from '../../@types/types';
import { calcCartTotalPrice } from '../../utils/calcCartTotalPrice';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { CartSliceState } from './types';

const { items, totalPrice } = getCartFromLS();

const initialState: CartSliceState = {
  totalPrice,
  items,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItemType>) {
      const duplicateItem = state.items.find((obj) => obj.id === action.payload.id);

      if (duplicateItem) {
        duplicateItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcCartTotalPrice(state.items);
    },

    removeItem(state, action: PayloadAction<CartItemType>) {
      //
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },

    minusItem(state, action: PayloadAction<CartItemType>) {
      //
      const duplicateItem = state.items.find((obj) => obj.id === action.payload.id);

      // if (duplicateItem && duplicateItem.count > 1) {
      if (duplicateItem) {
        duplicateItem.count--;
        state.totalPrice = state.totalPrice - duplicateItem.price;
      }
      // }
    },
  },
});

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
