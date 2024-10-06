import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { IProduct } from '../model/product';
import { ProductCard } from './product-card';

interface IRelatedProductProps {
  relatedProducts: IProduct[];
}

export const RelatedProduct: FC<IRelatedProductProps> = ({
  relatedProducts
}) => {
  return (
    <>
      <Typography variant="h5" sx={{ mt: 8, mb: 2, fontWeight: 700 }}>
        Related Products
      </Typography>
      <Grid container spacing={4}>
        {relatedProducts.slice(0, 4).map((relatedProduct) => (
          <Grid item xs={12} sm={6} md={3} key={relatedProduct.id}>
            <ProductCard data={relatedProduct} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default RelatedProduct;
