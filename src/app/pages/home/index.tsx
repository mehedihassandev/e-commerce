import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../redux/product-slice/product-slice';
import { gerProduct, Loader } from '../../ui/src';
import { ContentWrapper } from '../../utils/src';
import { DealOfTheDay } from './deal-of-the-day';
import { DiscountOffer } from './discount-offer';
import { Feature } from './feature';
import { Hero } from './hero';
import { SpecialProduct } from './special-product';
import { Product } from './top-product';

const FullWidthLoader = () => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}
  >
    <Loader variant="cart" />
  </Box>
);

export const Home = () => {
  const dispatch = useDispatch();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['product', { quantity: 1 }],
    queryFn: () => {
      return gerProduct({
        api: axios,
        url: ''
      });
    },
    select: (data) => data.data,
    staleTime: Infinity
  });

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

  return (
    <ContentWrapper>
      {isLoading && <FullWidthLoader />}
      <Hero />
      {data && <Product data={data} isLoading={isLoading} />}
      <Feature />
      <DealOfTheDay />
      <DiscountOffer />
      <SpecialProduct />
    </ContentWrapper>
  );
};

export default Home;
