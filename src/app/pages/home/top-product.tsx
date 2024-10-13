import { Grid, Typography } from '@mui/material';
import { ProductCard } from '../../components/product-card';
import { IProduct } from '../../model/product';

interface IProductProps {
  data: IProduct[];
}

export const Product = ({ data }: IProductProps) => {
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
      {data?.map((product: IProduct) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard data={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Product;
