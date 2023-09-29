import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartList from './CartList';
import { clearCart } from '../redux/slices/cartSlice';
import { Button, Typography } from '@mui/material';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((store) => store.cart);
  const facepalm =
    'https://img.freepik.com/premium-photo/facepalm-disappointed-man-covering-his-face-with-his-hand_262388-7440.jpg?w=2000';

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      {cartItems.length > 0 ? (
        <div>
          <Button onClick={handleClearCart} variant='text' size='big'>
            Clear Cart
          </Button>
          <div style={{ marginBottom: '50px' }}>
            {cartItems.map((book) => (
              <CartList key={book.id} book={book} {...book} />
            ))}
          </div>
          <Typography gutterBottom variant='h5' component='div'>
            Total Count: {totalPrice} $
          </Typography>
          <Typography gutterBottom variant='h5' component='div'>
            Total Quality: {cartItems.length}
          </Typography>
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h1> Cart is empty</h1>
          <img
            style={{ width: '100%', height: '100%', textAlign: 'center' }}
            src={facepalm}
            alt=''
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
