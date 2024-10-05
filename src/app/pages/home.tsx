import { Grid, Stack } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/product-card';
import { data } from '../constant/product-constant';
import { setProducts } from '../redux/product-slice/product-slice';
import { RootState } from '../redux/store';
import { ContentWrapper } from '../utils/src';

export const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector(
    (state: RootState) => state.productReducer.products
  );

  useEffect(() => {
    dispatch(setProducts(data));
  }, [dispatch]);

  return (
    <ContentWrapper
      sx={{
        backgroundColor: 'transparent'
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: 'center',
          my: 3
        }}
      >
        <Grid container spacing={3}>
          {products?.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard data={product} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContentWrapper>
  );
};

export default Home;
