import { Delete, Favorite } from '@mui/icons-material';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeFromCart } from '../redux';
import { RootState } from '../redux/store';
import { ContentWrapper } from '../utils/src';
import ProductCard from './product-card';

const Cart = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems
  );

  const relatedProducts = useSelector((state: RootState) =>
    state.productReducer.products.filter((p) => p.id !== parseInt(id || '', 10))
  );

  const subTotal = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', '').trim());

    return acc + price * item.quantity;
  }, 0);

  const shipping = 10;
  const total = subTotal + shipping;

  const handleRemoveFromCart = (itemId: string) => {
    dispatch(removeFromCart({ cartItemId: itemId }));
  };

  return (
    <ContentWrapper
      sx={{
        backgroundColor: 'transparent',
        my: 3
      }}
    >
      <Stack
        sx={{
          mt: 2
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={8}>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <Grid
                  container
                  spacing={2}
                  sx={{
                    border: '1px solid #f0f0f0',
                    backgroundColor: 'white',
                    p: 2,
                    borderRadius: 1,
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
                    mb: 4
                  }}
                  key={item.id}
                >
                  <Grid item xs={3}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        marginRight: '8px',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={9}
                    sx={{
                      p: 2
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0.5
                      }}
                    >
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body2">
                        Product Descriptions
                      </Typography>
                      <Typography variant="body2">Color</Typography>
                      <Typography variant="body2">
                        Quantity: {item.quantity}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 2
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          gap: 2,
                          alignItems: 'center'
                        }}
                      >
                        <Button
                          variant="outlined"
                          startIcon={<Delete />}
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          Remove From Cart
                        </Button>
                        <Button variant="outlined" startIcon={<Favorite />}>
                          Add To Whitelist
                        </Button>
                      </Box>
                      <Typography variant="body1">{item.price}</Typography>
                    </Box>
                  </Grid>
                </Grid>
              ))
            ) : (
              <Box sx={{ textAlign: 'center' }}>No items in cart</Box>
            )}
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sx={{
                  border: '1px solid #f0f0f0',
                  backgroundColor: 'white',
                  p: 4,
                  borderRadius: 1,
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)'
                }}
              >
                <Typography variant="h6">Order Summary</Typography>
                <Box
                  sx={{
                    mt: 2,
                    display: 'flex',
                    gap: 1,
                    flexDirection: 'column'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography variant="body1">Subtotal</Typography>
                    <Typography variant="body1">
                      $ {subTotal.toFixed(2)}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography variant="body1">Shipping</Typography>
                    <Typography variant="body1">$ {shipping}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography variant="body1">Total</Typography>
                    <Typography variant="body1">$ {total}</Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    width: '100%'
                  }}
                >
                  Checkout
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Typography variant="h5" sx={{ mt: 8, mb: 2, fontWeight: 700 }}>
          Related Products
        </Typography>
        <Grid container spacing={4}>
          {relatedProducts.slice(0, 4).map((relatedProduct) => (
            <Grid item xs={12} sm={6} md={3} key={relatedProduct.id}>
              <ProductCard data={relatedProduct} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContentWrapper>
  );
};

export default Cart;
