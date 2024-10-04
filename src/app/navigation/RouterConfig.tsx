import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import { ROUTES } from './route-constant';

export const RouterConfig = () => {
  const Home = lazy(() => import('../pages/home'));
  const About = lazy(() => import('../pages/about'));
  const Contact = lazy(() => import('../pages/contact'));

  return (
    <Suspense fallback={<Box>Loading ...</Box>}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
      </Routes>
    </Suspense>
  );
};

export default RouterConfig;
