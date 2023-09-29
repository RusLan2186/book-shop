import { AppBar, Container, IconButton, Toolbar,Typography} from '@mui/material';
import Modal from '@mui/material/Modal';
import React, { Children } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Cart from './cart/Cart';
import { useSelector } from 'react-redux';

import cartIcon from './img/cart.png'


const Header = () => {
  const cartItems = useSelector((store) => store.cart.cartItems)
  const totalPrice = useSelector((store) => store.cart.totalPrice)
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const style = {
    position: 'absolute',
    top:"50%",
    left:'50%',
  transform: 'translate(-50%, -50%)',
    // maxWidth: 400,
    bgcolor: 'background.paper',
   
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height:700
    };

  return (
    <div>
      <AppBar  position="static" sx={{bgcolor:'rgb(129, 80, 35)'}} >
        <Container>
        <Toolbar>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { xs: 'block', md: 'block' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow:1,
           
            }}
          >
            BookShop
          </Typography>
          <img className='cart' src={cartIcon} alt="cart" />
          <Typography onClick={handleOpen} sx={{marginRight:1, cursor:'pointer'}} >Cart</Typography>
      <Typography>{cartItems.length}</Typography>
          </Toolbar>
  </Container>
            </AppBar>
   
   <div>
 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    children={<Cart/>}
      >
        <Box  sx={{ ...style,  height:"80%", zIndex:20, overflow:"scroll" }}>
          <Cart/>
      
         </Box>
      </Modal>
   </div>
   
    </div>
  );
};

export default Header;
