import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './slices/booksSlice';
import cart from '../redux/slices/cartSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    cart,
  },
});
