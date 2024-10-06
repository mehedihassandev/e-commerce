import { Box, Grid, Stack } from '@mui/material';
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

const FavoriteItems = () => {
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
    const uniqueId = getProductUniqueId(product.id.toString(), cartItems);

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
          <Grid item xs={12}>
            {whitelistItems.length > 0 ? (
              whitelistItems.map((item) => (
                <Item
                  key={item.id}
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
        </Grid>
        <RelatedProduct relatedProducts={relatedProducts} />
      </Stack>
    </ContentWrapper>
  );
};

export default FavoriteItems;
