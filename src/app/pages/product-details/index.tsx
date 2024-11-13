import { AddShoppingCart, Delete, Star } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Tab,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card';
import { addToCart, toggleWhitelist } from '../../redux';
import { RootState } from '../../redux/store';
import { ContentWrapper } from '../../utils/src';

const ProductDetails = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const [value, setValue] = useState('1');

  const { control } = useForm();

  const product = useSelector((state: RootState) =>
    state.productReducer.products.find((p) => p.id === parseInt(id || '', 10))
  );

  const cartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems
  );

  const relatedProducts = useSelector((state: RootState) =>
    state.productReducer.products.filter((p) => p.id !== parseInt(id || '', 10))
  );

  const whitelistItems = useSelector(
    (state: RootState) => state.whitelistReducer.whitelistedProducts
  );

  const handleAddToCart = () => {
    const cartItem = {
      quantity: 1,
      id: product?.id || 0,
      name: product?.name || '',
      price: product?.price || '',
      discountPrice: product?.discountPrice || '',
      image: product?.image || ''
    };

    dispatch(addToCart(cartItem));
  };

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  const handleWhitelistToggle = () => {
    const whiteListItem = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      discountPrice: product.discountPrice,
      quantity: product.quantity || 1
    };

    dispatch(toggleWhitelist(whiteListItem));
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <ContentWrapper
      sx={{
        backgroundColor: 'transparent',
        mb: 3,
        mt: 10,
        px: {
          xs: 2,
          sm: 4,
          md: 6,
          lg: 10
        }
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
                mb: 1,
                color: 'black',
                fontWeight: 600
              }}
            >
              {product.name}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                my: 2
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center'
                }}
              >
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </Box>
              <Divider orientation="vertical" flexItem />
              <Typography>0 Review</Typography>
              <Divider orientation="vertical" flexItem />
              <Typography>Write a review</Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Box
              sx={{
                mb: 3
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                  mb: 1
                }}
              >
                <Typography
                  color="text.secondary"
                  sx={{
                    fontSize: '1.7rem',
                    fontWeight: 700,
                    color: theme.palette.primary.main
                  }}
                >
                  $ {product.discountPrice}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{
                    fontSize: '.85rem',
                    textDecoration: 'line-through'
                  }}
                >
                  $ {product.price}
                </Typography>
              </Box>
              <Typography>Ex Tax: $20.00</Typography>
            </Box>

            <Divider sx={{ mb: 2 }} />

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                mb: 5
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  maxWidth: 200,
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant="body2">Brand:</Typography>
                <Typography variant="body2">Nikon</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  maxWidth: 200,
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant="body2">Product Code:</Typography>
                <Typography variant="body2">1</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  maxWidth: 200,
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant="body2">Availability:</Typography>
                <Typography variant="body2" color="primary" fontWeight={700}>
                  In Stock
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                gap: 3
              }}
            >
              <Button
                variant="outlined"
                startIcon={<AddShoppingCart />}
                onClick={handleAddToCart}
                disabled={cartItems.some(
                  (cartItem) => cartItem.id === product?.id
                )}
              >
                Add To Cart
              </Button>

              <Button
                variant="outlined"
                startIcon={<Delete />}
                onClick={handleWhitelistToggle}
              >
                {whitelistItems.find(
                  (whitelistItem) => whitelistItem.id === product?.id
                )
                  ? 'Remove From Whitelist'
                  : 'Add To Whitelist'}
              </Button>
            </Box>
          </CardContent>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Descriptions" value="1" />
                  <Tab label="Review" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">{product?.description}</TabPanel>
              <TabPanel value="2">
                <Typography
                  sx={{
                    fontSize: '1rem'
                  }}
                >
                  There are no reviews for this product.
                </Typography>
                <Box
                  sx={{
                    mt: 4
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: 'uppercase',
                      fontSize: '1.2rem',
                      pb: 2
                    }}
                  >
                    Write a review
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2
                    }}
                  >
                    <TextField
                      name="name"
                      placeholder="Enter Your Name"
                      fullWidth
                      label="Enter Your Name"
                      size="medium"
                    />

                    <TextField
                      name="name"
                      placeholder="Enter Your Review"
                      fullWidth
                      label="Enter Your Review"
                      size="medium"
                      multiline
                      rows={4}
                    />
                    <Button
                      variant="outlined"
                      sx={{
                        alignSelf: 'flex-end',
                        p: '10px 40px'
                      }}
                    >
                      Submit
                    </Button>
                  </Box>
                </Box>
              </TabPanel>
            </TabContext>
          </Box>
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
