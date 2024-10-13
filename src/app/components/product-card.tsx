import { Favorite, ShoppingCart } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Skeleton,
  Typography,
  useTheme
} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../model/product';
import { addToCart, toggleWhitelist } from '../redux';
import { RootState } from '../redux/store';

interface IProductCardProps {
  data: IProduct[];
  isLoading?: boolean | undefined;
}

export const ProductCard: FC<IProductCardProps> = ({ data, isLoading }) => {
  console.log(data);
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const whitelistedProducts = useSelector(
    (state: RootState) => state.whitelistReducer.whitelistedProducts
  );

  const cartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems
  );

  const handleWhitelistToggle = (data: IProduct) => {
    try {
      const product = {
        id: data.id,
        title: data.title,
        price: data.price,
        description: data.description,
        category: data.category,
        image: data.image,
        rating: { rate: data.rating.rate, count: data.rating.count },
        quantity: 1
      };

      dispatch(toggleWhitelist(product));
    } catch (error) {
      console.error('Error toggling whitelist:', error);
    }
  };

  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (data: IProduct) => {
    try {
      const product = {
        id: data.id,
        title: data.title,
        price: data.price,
        description: data.description,
        category: data.category,
        image: data.image,
        rating: { rate: data.rating.rate, count: data.rating.count },
        quantity: 1
      };

      dispatch(addToCart(product));
    } catch (error) {
      console.error('Error toggling whitelist:', error);
    }
  };

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <>
      {data.map((product: IProduct) => {
        const isWhitelisted = whitelistedProducts.some(
          (item) => item.id === product.id
        );

        return (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Card
              sx={{
                boxShadow: 5,
                borderRadius: 2,
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
                '&:hover .favorite-icon': {
                  opacity: 1
                },
                border: isWhitelisted
                  ? `1px solid ${theme.palette.primary.main}`
                  : `1px solid ${theme.palette.grey[300]}`,
                minHeight: 450,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onClick={() => handleProductClick(product.id)}
            >
              <Box sx={{ position: 'relative' }}>
                {loading ? (
                  <Skeleton variant="rectangular" height={340} />
                ) : (
                  <CardMedia
                    component="img"
                    height="340"
                    image={product.image}
                    alt={product.title}
                    sx={{ objectFit: 'contain', p: 2 }}
                  />
                )}
                {loading ? (
                  <Skeleton
                    variant="circular"
                    width={40}
                    height={40}
                    sx={{ position: 'absolute', top: 10, right: 10 }}
                  />
                ) : (
                  <IconButton
                    className="favorite-icon"
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      color: isWhitelisted
                        ? theme.palette.primary.main
                        : theme.palette.grey[500],
                      opacity: isWhitelisted ? 1 : 0,
                      transition: 'opacity 0.3s'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhitelistToggle(product);
                    }}
                  >
                    <Favorite />
                  </IconButton>
                )}
              </Box>
              <CardContent>
                {loading ? (
                  <>
                    <Skeleton width="80%" />
                    <Skeleton width="60%" />
                  </>
                ) : (
                  <Grid container spacing={2}>
                    <Grid item xs={9}>
                      <Typography
                        sx={{
                          color: 'black',
                          fontWeight: 600,
                          fontSize: 18,
                          lineHeight: 1.5,
                          pb: 0.3
                        }}
                      >
                        {product.title.slice(0, 20)}
                        {product.title.length > 20 && '...'}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          gap: 2,
                          alignItems: 'end',
                          mt: 2
                        }}
                      >
                        <Typography
                          color="primary"
                          sx={{
                            fontSize: '1.1rem'
                          }}
                        >
                          $ {product.price.toFixed(2)}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          alignItems: 'center',
                          height: '100%'
                        }}
                      >
                        <IconButton
                          color="primary"
                          disabled={cartItems.some(
                            (item) => item.id === product.id
                          )}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                        >
                          <ShoppingCart />
                        </IconButton>
                      </Box>
                    </Grid>
                  </Grid>
                )}
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

export default ProductCard;
