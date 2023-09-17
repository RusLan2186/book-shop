import React, { useRef } from 'react';
import { Card, CardMedia, Typography, Button, CardActions, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import { deleteBook, minusBook, plusBook } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

const CartList = ({ book, name, poster, count, price }) => {
  const dispatch = useDispatch();

  const removeBook = () => {
    dispatch(deleteBook(book.id));
  };

  const onClickPlus = () => {
    dispatch(plusBook(book.id));
  };
  const onClickMinus = () => {
    dispatch(minusBook(book.id));
  };
  if (count === 1) {
    console.log('1111111');
  } else {
    console.log('< 0');
  }

  return (
    <div className='cart__list'>
      <Grid item xs={7} sm={5} md={4}>
        <Card sx={{ maxWidth: 445, height: '150' }}>
          <CardMedia sx={{ height: 250 }} image={poster} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {name}
            </Typography>

            <CardActions sx={{ display: 'flex', columnGap: 1, marginBottom: 3 }}>
              <Button onClick={onClickPlus} variant='outlined' size='big'>
                +
              </Button>
              <Typography variant='h5'> {count}</Typography>
              {count === 1 ? (
                <Button onClick={onClickMinus} disabled variant='outlined' size='big'>
                  -
                </Button>
              ) : (
                <Button onClick={onClickMinus} variant='outlined' size='big'>
                  -
                </Button>
              )}
            </CardActions>
            <Typography gutterBottom variant='h5'>
              Price: {price * count}$
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={removeBook} variant='text' size='big'>
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
};

export default CartList;
