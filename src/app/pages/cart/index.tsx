import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Item } from '../../components/item';
import { RelatedProduct } from '../../components/related-product';
import { IProduct } from '../../model/product';
import { ROUTES } from '../../navigation/route-constant';
import { removeFromCart, toggleWhitelist } from '../../redux';
import { RootState } from '../../redux/store';
import { ContentWrapper } from '../../utils/src';

const Cart = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    const price = parseFloat(item.discountPrice.replace('$', '').trim());

    return acc + price * item.quantity;
  }, 0);

  const shipping = cartItems.length > 0 ? 60 : 0;
  const total = subTotal + shipping;

  const handleRemoveFromCart = (itemId: number) => {
    dispatch(removeFromCart({ cartItemId: itemId }));
  };

  // const handleAddToCart = (product: IProduct) => {
  //   const uniqueId = getProductUniqueId(id, cartItems);

  //   const cartItem = {
  //     quantity: 1,
  //     id: product.id,
  //     name: product.name,
  //     price: product.price,
  //     image: product.image
  //   };
  //   dispatch(addToCart(cartItem));
  // };

  const handleWhitelistToggle = (product: IProduct) => {
    const item = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      discountPrice: product.discountPrice,
      quantity: product.quantity || 1
    };

    dispatch(toggleWhitelist(item));
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
                  handleWhitelistToggle={handleWhitelistToggle}
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
                  onClick={() => {
                    navigate(ROUTES.CHECKOUT);
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
