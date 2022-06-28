import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PizzaBlockType } from '../../@types/types';

export const fetchPizzas = createAsyncThunk<PizzaBlockType[], Record<string, string>>(
  'pizzas/fetchPizzasStatus',
  async (params) => {
    const { category, sortBy, order, search, currentPage, limitProductsOnPage } = params;

    const address = `https://628bd2d1667aea3a3e36d84e.mockapi.io/products/`;
    const requestParams = `?page=${currentPage}&limit=${limitProductsOnPage}&${category}&sortBy=${sortBy}&order=${order}&search=${search}`;
    const requestLink = `${address}${requestParams}`;

    const { data } = await axios.get<PizzaBlockType[]>(requestLink);

    return data;
  },
);
