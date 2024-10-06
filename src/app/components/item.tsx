import { Delete, Favorite, Remove } from '@mui/icons-material';
import { Box, Button, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { IProduct } from '../model/product';
import { RootState } from '../redux/store';

interface IItemProps {
  item: IProduct;
  handleRemoveFromCart: (itemId: number) => void;
  handleRemoveFromWhitelist: (itemId: number) => void;
  handleAddToWhitelist: (product: IProduct) => void;
  // handleAddToCart: (product: IProduct) => void;
}

export const Item: FC<IItemProps> = ({
  item,
  handleRemoveFromCart,
  handleRemoveFromWhitelist,
  handleAddToWhitelist
  // handleAddToCart
}) => {
  const location = useLocation();

  const cartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems
  );
  const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        border: '1px solid #f0f0f0',
        backgroundColor: 'white',
        p: 2,
        borderRadius: 1,
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        mb: 4
      }}
      key={item.id}
    >
      <Grid item xs={3}>
        <img
          src={item.image}
          alt={item.name}
          style={{
            marginRight: '8px',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Grid>
      <Grid
        item
        xs={9}
        sx={{
          p: 2
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0.5
          }}
        >
          <Typography variant="h6">{item.name}</Typography>
          <Typography variant="body2">Product Descriptions</Typography>
          <Typography variant="body2">Color</Typography>
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
            {/* {isInCart ? (
              <Button
                variant="outlined"
                startIcon={<Delete />}
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove From Cart
              </Button>
            ) : (
              <Button
                variant="outlined"
                startIcon={<AddShoppingCart />}
                onClick={() => handleAddToCart(item)}
              >
                Add To Cart
              </Button>
            )} */}
            {location.pathname === '/cart' && (
              <>
                <Button
                  variant="outlined"
                  startIcon={<Delete />}
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove From Cart
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<Favorite />}
                  onClick={() => handleAddToWhitelist(item)}
                >
                  Add To Whitelist
                </Button>
              </>
            )}

            <Button
              variant="outlined"
              startIcon={<Remove />}
              onClick={() => handleRemoveFromWhitelist(item.id)}
            >
              Remove From Whitelist
            </Button>
          </Box>
          <Typography variant="body1">{item.price}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Item;
