import { calcCartTotalPrice } from './calcCartTotalPrice';

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcCartTotalPrice(items);

  // if (items.length) {
  return {
    items,
    totalPrice,
  };
  // }
};
