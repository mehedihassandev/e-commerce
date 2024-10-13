import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductCard } from '../../components/product-card';
import { shuffleArray } from '../../helper/product-helper';
import { IProduct } from '../../model/product'; // Assuming you have a product model
import { RootState } from '../../redux/store';

export const SpecialProduct = () => {
  const [shuffledProducts, setShuffledProducts] = useState<IProduct[]>([]);

  const products = useSelector(
    (state: RootState) => state.productReducer.products
  );

  useEffect(() => {
    if (products.length > 0) {
      const shuffled = shuffleArray([...products]);
      setShuffledProducts(shuffled.slice(4, 12));
    }
  }, [products]);

  return (
    <Grid container spacing={3} my={8}>
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: '1.7rem',
            fontWeight: 700,
            textAlign: 'center',
            mb: 6
          }}
        >
          Special Products
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        <ProductCard data={shuffledProducts} />
      </Grid>
    </Grid>
  );
};

export default SpecialProduct;
