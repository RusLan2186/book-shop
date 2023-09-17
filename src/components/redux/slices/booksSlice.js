import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    booksFetchingSuccess: (state, action) => {
      state.books = action.payload;
      state.error = '';
      state.isLoading = false;
    },
    booksFetchingError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { booksFetching, booksFetchingSuccess, booksFetchingError } = booksSlice.actions;
export default booksSlice.reducer;
