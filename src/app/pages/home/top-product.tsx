import { Grid, Typography } from '@mui/material';
import { ProductCard } from '../../components/product-card';
import { IProduct } from '../../model/product';

interface IProductProps {
  data: IProduct[];
  isLoading?: boolean;
}

export const Product = ({ data, isLoading }: IProductProps) => {
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
      <ProductCard data={data} isLoading={isLoading} />
    </Grid>
  );
};

export default Product;
