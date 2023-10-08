import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type BooksType = {
id:string;
poster:string;
name:string;
price:number;
}

export interface BookSliceState{
  books:BooksType[]
  error:string;
  isLoading:boolean;
}

const initialState:BookSliceState = {
  books: [],
  error: '',
  isLoading: false,

};



export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    booksFetching: (state) => {
      state.isLoading = true;
    },
    booksFetchingSuccess: (state, action:PayloadAction<BooksType[]>) => {
      state.books = action.payload;
      state.error = '';
      state.isLoading = false;
      console.log(state.books);
    },
    booksFetchingError: (state, action:PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { booksFetching, booksFetchingSuccess, booksFetchingError } = booksSlice.actions;
export default booksSlice.reducer;
