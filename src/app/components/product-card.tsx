import { Favorite, ShoppingCart } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  useTheme
} from '@mui/material';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../model/product';
import { addToCart, toggleWhitelist } from '../redux';
import { RootState } from '../redux/store';

interface IProductCardProps {
  data: IProduct;
}

export const ProductCard: FC<IProductCardProps> = ({ data }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const isWhitelisted = useSelector((state: RootState) =>
    state.whitelistReducer.whitelistedProducts.some(
      (item) => item.id === data.id
    )
  );

  const cartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems
  );

  const handleWhitelistToggle = () => {
    const product = {
      id: data.id,
      name: data.name,
      image: data.image,
      price: data.price,
      discountPrice: data.discountPrice,
      quantity: data.quantity || 1
    };

    dispatch(toggleWhitelist(product));
  };

  const { id, name, price, image, discountPrice } = data;

  const handleProductClick = () => {
    // Navigate to the product details page using product id
    navigate(`/product/${id}`);
  };

  const handleAddToCart = () => {
    const cartItem = {
      quantity: 1,
      id: id,
      name: name,
      price: price,
      discountPrice: discountPrice,
      image: image
    };
    dispatch(addToCart(cartItem));
  };

  return (
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
      onClick={handleProductClick}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia component="img" height="340" image={image} alt={name} />

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
            handleWhitelistToggle();
          }}
        >
          <Favorite />
        </IconButton>
      </Box>
      <CardContent>
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
                  fontSize: '1.2rem',
                  fontWeight: 700
                }}
              >
                $ {discountPrice}
              </Typography>
              <Typography
                color="gray"
                sx={{
                  fontSize: '.75rem',
                  textDecoration: 'line-through'
                }}
              >
                $ {price}
              </Typography>
            </Box>
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
                disabled={cartItems.some((item) => item.id === id)}
              >
                <ShoppingCart />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
