import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type BooksType = {
id:number;
poster:string;
name:string;
price:number;
count:number;
}

export interface BookSliceState{
  books:BooksType[];
  booksSearchResult:BooksType[];
  error:string;
  isLoading:boolean;
}

const initialState:BookSliceState = {
  books: [],
  error: '',
  isLoading: false,
  booksSearchResult: [],

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

    },
    booksFetchingError: (state, action:PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    booksSearch:(state, action:PayloadAction<string>) =>{
      state.booksSearchResult = state.books.filter(
        (book) =>
          book.name.toLowerCase().includes(action.payload) ||
          String(book.price).includes(action.payload),
      );
    }
  },
});

export const { booksFetching, booksFetchingSuccess, booksFetchingError,booksSearch } = booksSlice.actions;
export default booksSlice.reducer;
