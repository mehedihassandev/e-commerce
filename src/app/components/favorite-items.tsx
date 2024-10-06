import { Box, Grid, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeFromCart } from '../redux';
import { RootState } from '../redux/store';
import { ContentWrapper } from '../utils/src';
import Item from './item';
import RelatedProduct from './related-product';

const FavoriteItems = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems
  );

  const relatedProducts = useSelector((state: RootState) =>
    state.productReducer.products
      .filter((p) => p.id !== parseInt(id || '', 10))
      .map((product) => ({
        ...product,
        quantity: 0 // Add a default quantity value
      }))
  );

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
          <Grid item xs={12}>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <Item item={item} handleRemoveFromCart={handleRemoveFromCart} />
              ))
            ) : (
              <Box sx={{ textAlign: 'center' }}>No items in cart</Box>
            )}
          </Grid>
        </Grid>
        <RelatedProduct relatedProducts={relatedProducts} />
      </Stack>
    </ContentWrapper>
  );
};

export default FavoriteItems;
