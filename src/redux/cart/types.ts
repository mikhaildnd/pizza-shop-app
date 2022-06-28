import { CartItemType } from '../../@types/types';

export interface CartSliceState {
  totalPrice: number;
  items: CartItemType[];
}
