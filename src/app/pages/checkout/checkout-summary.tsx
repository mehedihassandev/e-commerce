import {
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography
} from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const CheckoutSummary = () => {
  const cartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems
  );

  const subTotal = cartItems.reduce((acc, item) => {
    const price = item.price || 0;

    return acc + price * item.quantity;
  }, 0);

  const shipping = cartItems.length > 0 ? 60 : 0;
  const total = subTotal + shipping;

  return (
    <Stack
      sx={{
        my: 14,
        gap: 2
      }}
    >
      {cartItems?.map((item) => {
        return (
          <Card
            key={item.id}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              py: 2
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <Badge
                badgeContent={item.quantity}
                color="primary"
                overlap="circular"
                sx={{
                  position: 'absolute',
                  top: -5,
                  right: -5,
                  zIndex: 10,
                  '& .MuiBadge-badge': {
                    minWidth: 20,
                    height: 20,
                    borderRadius: '50%'
                  }
                }}
              />
              <CardMedia
                component="img"
                sx={{ width: 100, borderRadius: 2 }}
                image={item.image}
                alt={item.title}
              />
            </Box>

            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%'
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 700
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 700
                }}
              >
                $ {item.price.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        );
      })}

      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="body2">Subtotal</Typography>
        <Typography variant="body2">$ {subTotal.toFixed(2)}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="body2">Shipping</Typography>
        <Typography variant="body2">$ {shipping.toFixed(2)}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: 5
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700
          }}
        >
          Total
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700
          }}
        >
          $ {total.toFixed(2)}
        </Typography>
      </Box>

      <Button
        variant="outlined"
        sx={{
          py: 2
        }}
      >
        Place Order
      </Button>
    </Stack>
  );
};

export default CheckoutSummary;
