import { AddShoppingCart, Delete } from '@mui/icons-material';
import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { IProduct } from '../model/product';
import { LINKS } from '../navigation/route-constant';
import { removeFromCart, updateCartItem } from '../redux';
import { RootState } from '../redux/store';

interface IItemProps {
  item: IProduct;
  handleRemoveFromCart: (itemId: number) => void;
  handleAddToCart?: (product: IProduct) => void;
  handleWhitelistToggle?: (product: IProduct) => void;
}

export const Item: FC<IItemProps> = ({
  item,
  handleRemoveFromCart,
  handleAddToCart,
  handleWhitelistToggle
}) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const whitelistItems = useSelector(
    (state: RootState) => state.whitelistReducer.whitelistedProducts
  );

  const cartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems
  );

  const handleDecrement = () => {
    const updatedQuantity = (item.quantity ?? 0) - 1;
    if (updatedQuantity >= 0) {
      if (updatedQuantity === 0) {
        dispatch(removeFromCart({ cartItemId: item.id }));
      } else {
        dispatch(
          updateCartItem({
            id: item.id,
            quantity: updatedQuantity,
            title: item.title,
            price: item.price,
            description: item.description,
            category: item.category,
            image: item.image,
            rating: { rate: item.rating.rate, count: item.rating.count }
          })
        );
      }
    }
  };

  const handleIncrement = () => {
    const updatedQuantity = (item.quantity ?? 0) + 1;
    if (updatedQuantity >= 0) {
      dispatch(
        updateCartItem({
          id: item.id,
          quantity: updatedQuantity,
          title: item.title,
          price: item.price,
          description: item.description,
          category: item.category,
          image: item.image,
          rating: { rate: item.rating.rate, count: item.rating.count }
        })
      );
    }
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        border: '1px solid #f0f0f0',
        backgroundColor: 'white',
        pb: 2,
        borderRadius: 1,
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        mb: 4
      }}
      key={item.id}
    >
      <Grid item xs={3}>
        <img
          src={item.image}
          alt={item.title}
          style={{
            marginRight: '8px',
            width: '100%',
            height: '200px',
            objectFit: 'contain',
            borderRadius: '4px',
            padding: '8px'
          }}
        />
      </Grid>
      <Grid
        item
        xs={9}
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0.5
          }}
        >
          {location.pathname === LINKS.CART ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Typography variant="h6">{item.title}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton onClick={handleDecrement} size="small">
                  -
                </IconButton>
                <Typography variant="body1">{item.quantity}</Typography>
                <IconButton onClick={handleIncrement} size="small">
                  +
                </IconButton>
              </Box>
            </Box>
          ) : (
            <Typography variant="h6">{item.title}</Typography>
          )}
          <Typography variant="body2">Color: Black</Typography>
          <Typography variant="body2">Quantity: {item.quantity}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 2
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'center'
            }}
          >
            {location.pathname === LINKS.FAVORITE && handleAddToCart && (
              <Button
                variant="outlined"
                startIcon={<AddShoppingCart />}
                onClick={() => handleAddToCart(item)}
                disabled={cartItems.some((cartItem) => cartItem.id === item.id)}
              >
                Add To Cart
              </Button>
            )}
            {location.pathname === '/cart' && (
              <Button
                variant="outlined"
                startIcon={<Delete />}
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove From Cart
              </Button>
            )}

            <Button
              variant="outlined"
              startIcon={<Delete />}
              onClick={() =>
                handleWhitelistToggle && handleWhitelistToggle(item)
              }
            >
              {whitelistItems.find(
                (whitelistItem) => whitelistItem.id === item.id
              )
                ? 'Remove From Whitelist'
                : 'Add To Whitelist'}
            </Button>
          </Box>
          <Typography variant="body1">$ {item.price.toFixed(2)}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Item;
