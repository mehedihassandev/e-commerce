import { Box } from '@mui/material';
import { FC } from 'react';

import Loader from '../loader/loader';

export const SuspenseLoader: FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* <CircularProgress size={64} disableShrink thickness={3} /> */}
      <Loader />
    </Box>
  );
};

export default SuspenseLoader;
