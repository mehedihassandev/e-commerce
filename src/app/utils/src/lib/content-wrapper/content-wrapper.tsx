import { Box, SxProps } from '@mui/material';
import { CSSProperties, ReactNode } from 'react';

export interface ContentWrapperProps {
  children: ReactNode;
  style?: CSSProperties;
  sx?: SxProps;
}

export const ContentWrapper = ({
  children,
  style,
  sx
}: ContentWrapperProps) => {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        padding: '2px 250px',
        ...style,
        ...sx
      }}
    >
      <>{children}</>
    </Box>
  );
};

export default ContentWrapper;
