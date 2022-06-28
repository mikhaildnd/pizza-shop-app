import { PizzaBlockType } from '../../@types/types';

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface PizzaSliceState {
  products: PizzaBlockType[];
  status: Status;
}
