import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { ProductCard } from '../../components/product-card';
import { RootState } from '../../redux/store';

export const Product = () => {
  const products = useSelector(
    (state: RootState) => state.productReducer.products
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: '1.7rem',
            fontWeight: 700,
            textAlign: 'center',
            mb: 2
          }}
        >
          Top Product
        </Typography>
      </Grid>
      {products?.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard data={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Product;
