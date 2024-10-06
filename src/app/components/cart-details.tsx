import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductUniqueId } from '../helper/cart-helper';
import { IProduct } from '../model/product';
import {
  addToCart,
  addToWhitelist,
  removeFromCart,
  removeFromWhitelist
} from '../redux';
import { RootState } from '../redux/store';
import { ContentWrapper } from '../utils/src';
import Item from './item';
import RelatedProduct from './related-product';

const Cart = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems
  );

  const whitelistItems = useSelector(
    (state: RootState) => state.whitelistReducer.whitelistedProducts
  );

  const relatedProducts = useSelector((state: RootState) =>
    state.productReducer.products
      .filter((p) => p.id !== parseInt(id || '', 10))
      .map((product) => ({
        ...product,
        quantity: 0 // Add a default quantity value
      }))
  );

  const subTotal = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', '').trim());

    return acc + price * item.quantity;
  }, 0);

  const shipping = 10;
  const total = subTotal + shipping;

  const handleRemoveFromCart = (itemId: number) => {
    dispatch(removeFromCart({ cartItemId: itemId }));
  };

  const handleRemoveFromWhitelist = (itemId: number) => {
    dispatch(removeFromWhitelist({ whiteListItemId: itemId }));
  };

  const handleAddToWhitelist = (product: IProduct) => {
    const uniqueId = getProductUniqueId(product.id.toString(), whitelistItems);

    const whiteListItem = {
      quantity: 1,
      id: Number(uniqueId),
      name: product.name,
      price: product.price,
      image: product.image
    };
    dispatch(addToWhitelist(whiteListItem));
  };

  const handleAddToCart = (product: IProduct) => {
    const uniqueId = getProductUniqueId(id, cartItems);

    const cartItem = {
      quantity: 1,
      id: Number(uniqueId),
      name: product.name,
      price: product.price,
      image: product.image
    };
    dispatch(addToCart(cartItem));
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
                <Item
                  item={item}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleAddToWhitelist={handleAddToWhitelist}
                  handleRemoveFromWhitelist={handleRemoveFromWhitelist}
                  // handleAddToCart={handleAddToCart}
                />
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
        <RelatedProduct relatedProducts={relatedProducts} />
      </Stack>
    </ContentWrapper>
  );
};

export default Cart;
