import { CartItemType } from '../@types/types';

export const calcCartTotalPrice = (items: CartItemType[]) => {
  return items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};
