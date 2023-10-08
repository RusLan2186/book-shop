import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchThunkBooks } from '../redux/slices/booksLoad';
import BooksItem from './BooksItem';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import { RootState, useAppDispatch } from '../redux/store';

const Books:React.FC = () => {
  const dispatch = useAppDispatch();
  const books = useSelector((store:RootState) => store.books.books);
  const error = useSelector((store:RootState) => store.books.error);
  const isLoading = useSelector((store:RootState) => store.books.isLoading);
  const [searchValue, setSearchValue] = useState('');
  const [notFound, setNotFound] = useState<string>('');
  const sort = ['title', 'year'];

  useEffect(() => {
    dispatch(fetchThunkBooks());
    setNotFound('');
  }, []);

  const booksList = books.filter(
    (book) =>
      book.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      String(book.price).includes(searchValue.toLowerCase()),
  );
  useEffect(() => {
    if (searchValue.length > 0 && booksList.length === 0) {
      setNotFound('books not found');
    }
    if (booksList.length !== 0) {
      setNotFound('');
    }
  }, [searchValue, booksList]);

  return (
    <div>
      <div className='search'>
        <span onClick={() => setSearchValue('')} className={searchValue ? '' : 'disabled'}>
          X
        </span>
        <input
          type='text'
          className='search__input'
          placeholder='Search'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      {error}
      {isLoading && <h1 className='loading'>Loading....</h1>}
      <Grid container spacing={2}>
        {booksList.map((book) => (
          <BooksItem {...book} key={book.id} />
        ))}
      </Grid>
      <h1 className='not__found'> {notFound}</h1>
    </div>
  );
};

export default Books;
