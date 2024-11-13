import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { data } from '../../constants/product-constant';
import { setProducts } from '../../redux/product-slice/product-slice';
import { ContentWrapper } from '../../utils/src';
import { DealOfTheDay } from './deal-of-the-day';
import { DiscountOffer } from './discount-offer';
import { Feature } from './feature';
import { Hero } from './hero';
import { SpecialProduct } from './special-product';
import { Product } from './top-product';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(data));
  }, [dispatch]);

  return (
    <ContentWrapper
      sx={{
        backgroundColor: 'transparent',
        px: {
          xs: 2,
          sm: 4,
          md: 6,
          lg: 10
        }
      }}
    >
      <Hero />
      <Product />
      <Feature />
      <DealOfTheDay />
      <DiscountOffer />
      <SpecialProduct />
    </ContentWrapper>
  );
};

export default Home;
