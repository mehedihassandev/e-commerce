import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Footer, Header } from '../ui/src';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Box sx={{ minHeight: '100vh', paddingTop: '74px' }}>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
