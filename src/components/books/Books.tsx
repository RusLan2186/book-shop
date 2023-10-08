import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchThunkBooks } from '../redux/slices/booksLoad';
import BooksItem from './BooksItem';
import Grid from '@mui/material/Grid';
import { RootState, useAppDispatch } from '../redux/store';
import { booksSearch } from '../redux/slices/booksSlice';

const Books:React.FC = () => {
  const dispatch = useAppDispatch();
  const booksList = useSelector((store:RootState) => store.books.books);
  const searchBooks = useSelector((store:RootState) =>store.books.booksSearchResult)
  const error = useSelector((store:RootState) => store.books.error);
  const isLoading = useSelector((store:RootState) => store.books.isLoading);
  const [searchValue, setSearchValue] = useState<string>('');
  const [notFound, setNotFound] = useState<string>('');


  useEffect(() => {
    dispatch(fetchThunkBooks());
    setNotFound('');
  }, []);

  useEffect(() =>{
    dispatch(booksSearch(searchValue))
      },[booksList,searchValue])


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
        {searchBooks.map((book) => (
          <BooksItem {...book} key={book.id} />
        ))}
      </Grid>
      <h1 className='not__found'> {notFound}</h1>
    </div>
  );
};

export default Books;
