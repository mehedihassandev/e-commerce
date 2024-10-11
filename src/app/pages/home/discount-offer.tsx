import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography
} from '@mui/material';

const products = [
  {
    title: 'Summer',
    subtitle: 'Fresh Fruit, Vegetables',
    description: 'Up to 25% off Fruit',
    image:
      'https://cdn.pixabay.com/photo/2014/10/31/10/00/camera-510524_1280.jpg'
  },
  {
    title: 'Summer',
    subtitle: 'Fresh Fruit, Vegetables',
    description: 'Up to 25% off Fruit',
    image: 'https://cdn.pixabay.com/photo/2014/10/31/10/01/lens-510529_1280.jpg'
  }
];

export const DiscountOffer = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                display: 'flex',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: 5
              }}
            >
              <Box
                component="img"
                sx={{
                  width: '50%',
                  objectFit: 'cover'
                }}
                src={product.image}
                alt={product.subtitle}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  width: '50%',
                  textAlign: 'left',
                  bgcolor: '#f8f8f8',
                  p: 4
                }}
              >
                <Typography variant="h5" color="success.main">
                  {product.title}
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  {product.subtitle}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ my: 1 }}
                >
                  {product.description}
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DiscountOffer;
