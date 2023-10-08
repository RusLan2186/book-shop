import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export type CartItemsType = {
  name:string;
  poster:string;
  count:number;
  price:number;
  id?:number;
}

export interface CartStateSlice{
  cartItems:CartItemsType[];
  totalPrice:number;
}

const initialState:CartStateSlice = {
  cartItems: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addBook(state, action:PayloadAction<CartItemsType>) {
      const findItem = state.cartItems.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.cartItems.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    deleteBook(state, action:PayloadAction<number>) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    clearCart(state) {
      state.cartItems = [];
    },
    plusBook(state, action:PayloadAction<number>) {
      const findItem = state.cartItems.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count++;
      }
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusBook(state, action:PayloadAction<number>) {
      const findItem = state.cartItems.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
        if (findItem.count < 1) {
          findItem.count = 1;
        }
      }
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
  },
});

export const { addBook, deleteBook, clearCart, plusBook, minusBook } = cartSlice.actions;
export default cartSlice.reducer;
