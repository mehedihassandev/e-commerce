import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/product-card';
import { getProductUniqueId } from '../helper/cart-helper';
import { addToCart } from '../redux';
import { RootState } from '../redux/store';
import { ContentWrapper } from '../utils/src';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const product = useSelector((state: RootState) =>
    state.productReducer.products.find((p) => p.id === parseInt(id || '', 10))
  );

  const cartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems
  );

  const relatedProducts = useSelector((state: RootState) =>
    state.productReducer.products.filter((p) => p.id !== parseInt(id || '', 10))
  );

  const handleAddToCart = () => {
    const uniqueId = getProductUniqueId(id, cartItems);

    const cartItem = {
      quantity: 1,
      id: product?.id || 0,
      name: product?.name || '',
      price: product?.price || '',
      image: product?.image || ''
    };

    // const existingItem = cartItems.find(
    //   (cartItem) => cartItem.id === Number(uniqueId)
    // );

    // if (existingItem) {
    //   dispatch(
    //     updateCartItem({
    //       ...existingItem,
    //       quantity: existingItem.quantity + 1
    //     })
    //   );

    //   return;
    // }

    dispatch(addToCart(cartItem));
  };

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  return (
    <ContentWrapper
      sx={{
        backgroundColor: 'transparent',
        my: 3
      }}
    >
      <Grid container spacing={8}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={product.image}
              alt="Product Image"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <CardContent
            sx={{
              maxWidth: 700
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 0.5
              }}
            >
              {product.name}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                mb: 0.5
              }}
            >
              Category: Electronics
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                mb: 1.5
              }}
            >
              {product.price}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                lineHeight: 1.8
              }}
            >
              {product.description}
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 8 }}
              onClick={handleAddToCart}
              disabled={cartItems.some((item) => item.id === product.id)}
            >
              Add to Cart
            </Button>
          </CardContent>
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
    </ContentWrapper>
  );
};

export default ProductDetails;
