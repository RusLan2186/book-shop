import React from 'react';
import Grid from '@mui/material/Grid';

import { Card, CardMedia, Typography, Button, CardActions, CardContent } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/slices/cartSlice';

const BooksItem = ({ id, name, price, poster, count }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    const item = { id, name, price, poster, count };
    dispatch(addBook(item));
  };

  return (
    <Grid item xs={7} sm={5} md={4}>
      <Card sx={{ maxWidth: 345, height: '100' }}>
        <CardMedia sx={{ height: 200 }} image={poster} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <Typography variant='body6'> Price: {price} $</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={addToCart} variant='text' size='big'>
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BooksItem;
