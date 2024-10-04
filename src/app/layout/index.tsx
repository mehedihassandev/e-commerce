import { Box } from '@mui/material';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../ui/src';

// Import Outlet
export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Box sx={{ minHeight: '100vh', paddingTop: '74px' }}>
        <Outlet /> {/* This renders the nested routes */}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
