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
import { getProductUniqueId } from '../helper/cart-helper';
import { addToCart, toggleWhitelist } from '../redux';
import { RootState } from '../redux/store';

interface IProductCardProps {
  data: {
    id: number;
    name: string;
    image: string;
    price: string;
  };
}

export const ProductCard: FC<IProductCardProps> = ({ data }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const isWhitelisted = useSelector((state: RootState) =>
    state.whitelistReducer.whitelistedProducts.includes(data.id)
  );

  const cartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems
  );

  const handleWhitelistToggle = () => {
    dispatch(toggleWhitelist(data.id));
  };

  const { name, price, image } = data;

  const handleProductClick = () => {
    // Navigate to the product details page using product id
    navigate(`/product/${data.id}`);
  };

  const handleAddToCart = () => {
    const uniqueId = getProductUniqueId(data.id.toString(), cartItems);

    const cartItem = {
      quantity: 1,
      id: uniqueId,
      name: data.name,
      price: data.price,
      image: data.image
    };
    dispatch(addToCart(cartItem));
  };

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card
      sx={{
        boxShadow: 3,
        borderRadius: 1,
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        '&:hover .favorite-icon': {
          opacity: 1
        }
      }}
      onClick={handleProductClick}
    >
      <Box sx={{ position: 'relative' }}>
        {loading ? (
          <Skeleton variant="rectangular" height={340} />
        ) : (
          <CardMedia component="img" height="340" image={image} alt={name} />
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
                : theme.palette.secondary.main,
              opacity: isWhitelisted ? 1 : 0,
              transition: 'opacity 0.3s'
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleWhitelistToggle();
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
            <Grid item xs={6}>
              <Typography
                sx={{
                  color: 'black',
                  fontWeight: 600,
                  fontSize: 18,
                  lineHeight: 1.5,
                  pb: 0.3
                }}
              >
                {name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.primary.main }}
              >
                {price}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  height: '100%'
                }}
              >
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart();
                  }}
                  color="primary"
                >
                  <ShoppingCart />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
