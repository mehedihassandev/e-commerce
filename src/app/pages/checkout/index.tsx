import { Grid } from '@mui/material';
import { ContentWrapper } from '../../utils/src';
import { CheckoutForm } from './checkout-form';
import { CheckoutSummary } from './checkout-summary';

export const Checkout = () => {
  return (
    <ContentWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <CheckoutForm />
        </Grid>
        <Grid item xs={12} md={4}>
          <CheckoutSummary />
        </Grid>
      </Grid>
    </ContentWrapper>
  );
};

export default Checkout;
