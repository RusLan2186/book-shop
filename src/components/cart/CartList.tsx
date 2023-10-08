import React, { useRef } from 'react';
import { Card, CardMedia, Typography, Button, CardActions, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import { CartItemsType, CartStateSlice, deleteBook, minusBook, plusBook } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';




const CartList:React.FC<CartItemsType> = ({ id, name, poster, count, price }) => {
  const dispatch = useDispatch();

  const removeBook = () => {
    dispatch(deleteBook(id));
  };

  const onClickPlus = () => {
    dispatch(plusBook(id));
  };
  const onClickMinus = () => {
    dispatch(minusBook(id));
  };

  return (
    <div className='cart__list'>
      <Grid item>
        <Card sx={{ maxWidth: 445, height: '150' }}>
          <CardMedia sx={{ height: 250 }} image={poster} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {name}
            </Typography>

            <CardActions sx={{ display: 'flex', columnGap: 1, marginBottom: 3 }}>
              <Button onClick={onClickPlus} variant='outlined' >
                +
              </Button>
              <Typography variant='h5'> {count}</Typography>
              {count === 1 ? (
                <Button onClick={onClickMinus} disabled variant='outlined' >
                  -
                </Button>
              ) : (
                <Button onClick={onClickMinus} variant='outlined' >
                  -
                </Button>
              )}
            </CardActions>
            <Typography gutterBottom variant='h5'>
              Price: {price * count}$
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={removeBook} variant='text'>
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
};

export default CartList;
