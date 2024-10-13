import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material';
import { Box, Grid, IconButton, Typography, useTheme } from '@mui/material';
import { ContentWrapper } from '../../../../utils/src';

export const Footer = () => {
  const theme = useTheme();

  return (
    <ContentWrapper
      sx={{
        backgroundImage:
          'url(https://opencart.dostguru.com/FD03/freshgo_01/image/catalog/bg.jpg)', // Update with your image path
        backgroundSize: 'cover', // Ensure the image covers the entire area
        backgroundPosition: 'center', // Center the image
        color: '#fff',
        paddingTop: 6,
        paddingBottom: 6
      }}
    >
      <Grid container spacing={4}>
        {/* Footer Links */}
        <Grid item xs={12} md={3}>
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0.8,
              mt: 2
            }}
          >
            <Typography variant="body2">Organic Store</Typography>
            <Typography variant="body2">Uffin Street Pufville India</Typography>
            <Typography variant="body2">Surat</Typography>
            <Typography variant="body2">123-456-789</Typography>
            <Typography variant="body2">demo@demo.com</Typography>
          </Box>
          <Box sx={{ display: 'flex', mt: 2 }}>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Twitter />
            </IconButton>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
            <IconButton color="inherit">
              <Pinterest />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h5" gutterBottom>
            Information
          </Typography>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', gap: 0.8, mt: 2 }}
          >
            <Typography variant="body2">About Us</Typography>
            <Typography variant="body2">Delivery Information</Typography>
            <Typography variant="body2">Privacy Policy</Typography>
            <Typography variant="body2">Terms & Conditions</Typography>
            <Typography variant="body2">Brands</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h5" gutterBottom>
            My Account
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0.8,
              mt: 2
            }}
          >
            <Typography variant="body2">My Account</Typography>
            <Typography variant="body2">Order History</Typography>
            <Typography variant="body2">Wish List</Typography>
            <Typography variant="body2">Newsletter</Typography>
            <Typography variant="body2">Specials</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h5" gutterBottom>
            Customer Service
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0.8,
              mt: 2
            }}
          >
            <Typography variant="body2">Contact Us</Typography>
            <Typography variant="body2">Returns</Typography>
            <Typography variant="body2">Site Map</Typography>
            <Typography variant="body2">Gift Certificates</Typography>
            <Typography variant="body2">Affiliate</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        {/*  <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            textAlign: 'center'
          }}
        >
          <Typography variant="body2">Snack Plants</Typography>
          <Typography variant="body2">|</Typography>
          <Typography variant="body2">Garden Plant</Typography>
          <Typography variant="body2">|</Typography>
          <Typography variant="body2">House Plants</Typography>
          <Typography variant="body2">|</Typography>
          <Typography variant="body2">Indoor Plants</Typography>
          <Typography variant="body2">|</Typography>
          <Typography variant="body2">Small Plants</Typography>
          <Typography variant="body2">|</Typography>
          <Typography variant="body2">Office Plants</Typography>
          <Typography variant="body2">|</Typography>
          <Typography variant="body2">Crenate Leaf</Typography>
          <Typography variant="body2">|</Typography>
          <Typography variant="body2">Vascular Plant</Typography>
          <Typography variant="body2">|</Typography>
          <Typography variant="body2">Indian Basil</Typography>
          <Typography variant="body2">|</Typography>
          <Typography variant="body2">Natural</Typography>
          <Typography variant="body2">|</Typography>
          <Typography variant="body2">Emergent Plants</Typography>
        </Box> */}
        <Typography variant="caption" display="block" sx={{ mt: 2 }}>
          Powered By
          <Typography
            component="a"
            href="https://www.mehedihassan.me/"
            target="_blank"
            sx={{
              color: 'primary.main',
              textTransform: 'capitalize',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-block',
              p: 1,
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            Md. Mehedi Hassan.
          </Typography>
          © {new Date().getFullYear()}
        </Typography>
      </Box>
    </ContentWrapper>
  );
};

export default Footer;
