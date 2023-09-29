import { booksFetching, booksFetchingError, booksFetchingSuccess } from './booksSlice';

export const fetchThunkBooks = () => {
  return function (dispatch) {
    dispatch(booksFetching());

    fetch('http://localhost:3001/books')
      .then((response) => response.json())
      .then((json) => dispatch(booksFetchingSuccess(json)))
      .catch((e) => dispatch(booksFetchingError(e.message)));
  };
};
