import FavoriteIcon from '@mui/icons-material/Favorite';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FC, useState } from 'react';

interface IProductCardProps {
  data: {
    id: number;
    name: string;
    image: string;
    price: string;
  };
}

export const ProductCard: FC<IProductCardProps> = ({ data }) => {
  const theme = useTheme();
  const [isWhitelisted, setIsWhitelisted] = useState(false);

  const handleWhitelistToggle = () => {
    setIsWhitelisted(!isWhitelisted);
  };

  const { name, price, image } = data;

  return (
    <Card sx={{ boxShadow: 3, borderRadius: 1, overflow: 'hidden' }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="340"
          image={image}
          alt="Paella dish"
        />
        <IconButton
          onClick={handleWhitelistToggle}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: isWhitelisted
              ? theme.palette.error.main
              : theme.palette.grey[500]
          }}
        >
          <FavoriteIcon />
        </IconButton>
      </Box>
      <CardContent>
        <Typography
          sx={{ color: theme.palette.primary.main, fontSize: '1.3rem', pt: 1 }}
        >
          {name}
        </Typography>
        <Typography
          sx={{ color: theme.palette.primary.main, fontSize: '1rem', pt: 1 }}
        >
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
