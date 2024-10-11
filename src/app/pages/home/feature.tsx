import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Avatar, Box, Grid, Typography, useTheme } from '@mui/material';

export const Feature = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <SupportAgentIcon fontSize="large" />,
      title: '24/7 Free Support',
      description: 'Passage Of Lorem Ipsum, You Need To Be Amet Embarrassing.'
    },
    {
      icon: <LocalShippingIcon fontSize="large" />,
      title: 'Free Worldwide Shipping',
      description: 'Passage Of Lorem Ipsum, You Need To Be Amet Embarrassing.'
    },
    {
      icon: <AttachMoneyIcon fontSize="large" />,
      title: 'Money Back Guarantee',
      description: 'Passage Of Lorem Ipsum, You Need To Be Amet Embarrassing.'
    },
    {
      icon: <CardGiftcardIcon fontSize="large" />,
      title: 'Win $100 To Shop',
      description: 'Passage Of Lorem Ipsum, You Need To Be Amet Embarrassing.'
    }
  ];

  return (
    <Box sx={{ my: 8, textAlign: 'center' }}>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box>
              <Avatar
                sx={{
                  bgcolor: theme.palette.primary.main,
                  width: 56,
                  height: 56,
                  margin: '0 auto'
                }}
              >
                {feature.icon}
              </Avatar>
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  mb: 1,
                  color: theme.palette.grey[800],
                  lineHeight: 1.5
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.grey[700],
                  lineHeight: 1.8,
                  paddingX: 2
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Feature;
