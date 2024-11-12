import { CreditCard, HelpOutline, Lock } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Typography
} from '@mui/material';
import { useForm } from 'react-hook-form';
import {
  countryOptions,
  paymentMethodsOption
} from '../../constants/cart-constant';
import { RhfSelect, RhfTextField } from '../../utils/src';
import RhfCheckbox from '../../utils/src/lib/rhf-checkbox';
import RhfRadio from '../../utils/src/lib/rhf-radio';

export const CheckoutForm = () => {
  const { control } = useForm();

  return (
    <Stack
      sx={{
        my: 8
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mb: 2
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700
          }}
        >
          Delivery
        </Typography>
        <RhfSelect
          control={control}
          name="country"
          label="Country"
          size="medium"
          options={countryOptions}
        />

        <Box
          sx={{
            display: 'flex',
            gap: 2
          }}
        >
          <RhfTextField
            control={control}
            name="firstName"
            label="First Name"
            size="medium"
            fullWidth
          />
          <RhfTextField
            control={control}
            name="lastName"
            label="Last Name"
            size="medium"
            fullWidth
          />
        </Box>
        <RhfTextField
          control={control}
          name="address"
          label="Address"
          size="medium"
          fullWidth
        />
        <RhfTextField
          control={control}
          name="addressDetails"
          label="Apartment, suite, etc. (Optional)"
          size="medium"
          fullWidth
        />
        <Box
          sx={{
            display: 'flex',
            gap: 2
          }}
        >
          <RhfTextField
            control={control}
            name="city"
            label="City"
            size="medium"
            fullWidth
          />
          <RhfTextField
            control={control}
            name="postalCode"
            label="Postal Code"
            size="medium"
            fullWidth
          />
        </Box>
        <RhfCheckbox
          control={control}
          name="checkbox"
          label="Save this information for next time"
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 3,
          mb: 2
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700
          }}
        >
          Shipping method
        </Typography>
        <RhfRadio
          control={control}
          name="paymentMethods"
          options={paymentMethodsOption}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 3
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0.5,
            mb: 2
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700
            }}
          >
            Payment
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              color: 'gray'
            }}
          >
            All transactions are secure and encrypted.
          </Typography>
        </Box>

        <Card sx={{ border: '1px solid red' }}>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2
              }}
            >
              <Box sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                Credit card
              </Box>
              <IconButton>
                <CreditCard sx={{ color: 'orange' }} />
              </IconButton>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <RhfTextField
                  control={control}
                  name="cardNumber"
                  label="Card number"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Lock />
                      </InputAdornment>
                    )
                  }}
                  size="medium"
                />
              </Grid>

              <Grid item xs={6}>
                <RhfTextField
                  control={control}
                  name="expireDate"
                  label="Expiration date (MM / YY)"
                  fullWidth
                  size="medium"
                />
              </Grid>

              <Grid item xs={6}>
                <RhfTextField
                  control={control}
                  name="code"
                  label="Security code"
                  size="medium"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <HelpOutline />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <RhfTextField
                  control={control}
                  name="nameOfCard"
                  label="Name on card"
                  fullWidth
                  size="medium"
                />
              </Grid>

              <Grid item xs={12}>
                <RhfCheckbox
                  control={control}
                  name="checkbox"
                  label="Use shipping address as billing address"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Stack>
  );
};

export default CheckoutForm;
