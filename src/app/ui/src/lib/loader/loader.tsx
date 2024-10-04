import { CircularProgress } from '@mui/material';
import { FC } from 'react';

import CartLoader from './cart-loader/cart-loader';
import SimLoader from './sim-loader/sim-loader';

type LoaderProps = {
  variant?: 'sim' | 'cart' | 'rocket';
};

export const Loader: FC<LoaderProps> = ({ variant }) => {
  switch (variant) {
    case 'sim':
      return <SimLoader />;
    case 'cart':
      return <CartLoader />;
    default:
      return <CircularProgress color="inherit" />;
  }
};

export default Loader;
