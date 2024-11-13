import { Box, Grid, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Item } from '../../components/item';
import { RelatedProduct } from '../../components/related-product';
import { IProduct } from '../../model/product';
import { removeFromCart, toggleWhitelist } from '../../redux';
import { RootState } from '../../redux/store';
import { ContentWrapper } from '../../utils/src';

const FavoriteItems = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

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
        my: 3,
        px: {
          xs: 2,
          sm: 4,
          md: 6,
          lg: 10
        }
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
                  handleWhitelistToggle={handleWhitelistToggle}
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
