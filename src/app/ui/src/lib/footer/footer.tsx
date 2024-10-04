import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Container, Grid, Stack, useTheme } from '@mui/material';

export const Footer = () => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        borderTop: '1px solid #e0e0e0',
        py: 8,
        backgroundColor: theme.palette.grey[200]
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={2}>
          <Grid container>
            <Grid item xs={6}>
              @2024 All rights reserved
            </Grid>
            <Grid
              item
              xs={6}
              textAlign="right"
              sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}
            >
              <Facebook />
              <Instagram />
              <Twitter />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;
