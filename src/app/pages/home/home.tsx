import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { data } from '../../constants/product-constant';
import { setProducts } from '../../redux/product-slice/product-slice';
import { ContentWrapper } from '../../utils/src';
import Feature from './feature';
import { Hero } from './hero';
import { Product } from './top-product';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(data));
  }, [dispatch]);

  return (
    <ContentWrapper
      sx={{
        backgroundColor: 'transparent'
      }}
    >
      <Hero />
      <Product />
      <Feature />
    </ContentWrapper>
  );
};

export default Home;
