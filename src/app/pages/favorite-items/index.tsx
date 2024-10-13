import { Box, Grid, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Item } from '../../components/item';
import { ProductCard } from '../../components/product-card';
import { IProduct } from '../../model/product';
import { removeFromCart, toggleWhitelist } from '../../redux';
import { RootState } from '../../redux/store';
import { ContentWrapper } from '../../utils/src';

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
      .slice(0, 4)
  );

  const handleRemoveFromCart = (itemId: number) => {
    dispatch(removeFromCart({ cartItemId: itemId }));
  };

  // const handleAddToCart = (product: IProduct) => {
  //   const uniqueId = getProductUniqueId(product.id.toString(), cartItems);

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
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      rating: { rate: product.rating.rate, count: product.rating.count },
      quantity: 1
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
          <Grid item xs={12}>
            {whitelistItems.length > 0 ? (
              whitelistItems.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  handleRemoveFromCart={handleRemoveFromCart}
                  // handleAddToCart={handleAddToCart}
                  handleWhitelistToggle={handleWhitelistToggle}
                />
              ))
            ) : (
              <Box sx={{ textAlign: 'center' }}>No items in cart</Box>
            )}
          </Grid>
        </Grid>
        <Typography variant="h5" sx={{ mt: 8, mb: 4, fontWeight: 700 }}>
          Related Products
        </Typography>
        <Grid container spacing={2}>
          <ProductCard data={relatedProducts} />
        </Grid>
      </Stack>
    </ContentWrapper>
  );
};

export default FavoriteItems;
