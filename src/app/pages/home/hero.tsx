import { Box, Button, Typography } from '@mui/material';

export const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '90vh'
      }}
    >
      {/* Left Content */}
      <Box sx={{ maxWidth: '50%' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            lineHeight: 1.3,
            textTransform: 'capitalize'
          }}
        >
          Discover the Best Deals on Electronics Today!
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, mb: 8 }}>
          Shop the latest gadgets, electronics, and accessories at unbeatable
          prices. Enjoy fast shipping and excellent customer service!
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{ backgroundColor: 'green', padding: '10px 20px' }}
        >
          Shop Now
        </Button>
      </Box>

      {/* Right Image */}
      <Box>
        <img
          src="https://img.freepik.com/free-photo/view-electronic-product-balancing-podium_23-2150141328.jpg?t=st=1728304581~exp=1728308181~hmac=a7c26f8d711efdbe541aa6bfe3ac18aae1a93c94e3bcb856c67c6832c5f183bb&w=740"
          alt="Organic Fresh Fruits"
          style={{ maxHeight: '50vh', borderRadius: '10px' }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
