import { ComponentProps, FC, lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { Layout } from '../layout';
import { SuspenseLoader } from '../ui/src/lib/suspense-loader/suspense-loader';
import { ROUTES } from './route-constant';

const Loader = (Component: FC) => (props: ComponentProps<typeof Component>) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

const Home = Loader(lazy(() => import('../pages/home')));
const Popular = Loader(lazy(() => import('../pages/popular')));
const Offer = Loader(lazy(() => import('../pages/offer')));

const ProductDetails = Loader(lazy(() => import('../pages/product-details')));
const CartDetails = Loader(lazy(() => import('../pages/cart')));

const FavoriteItems = Loader(lazy(() => import('../pages/favorite-items')));
const Checkout = Loader(lazy(() => import('../pages/checkout')));

export const RouterConfig = () => {
  const location = useLocation();

  const background =
    location.state && (location.state.background as typeof location);

  return (
    <Routes location={background || location}>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.POPULAR} element={<Popular />} />
        <Route path={ROUTES.OFFERS} element={<Offer />} />
        <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetails />} />
        <Route path={ROUTES.CART} element={<CartDetails />} />
        <Route path={ROUTES.FAVORITE} element={<FavoriteItems />} />
        <Route path={ROUTES.CHECKOUT} element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default RouterConfig;
