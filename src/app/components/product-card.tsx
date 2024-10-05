import FavoriteIcon from '@mui/icons-material/Favorite';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWhitelist } from '../redux';
import { RootState } from '../redux/store';

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
  const dispatch = useDispatch();

  const isWhitelisted = useSelector((state: RootState) =>
    state.whitelistReducer.whitelistedProducts.includes(data.id)
  );

  const handleWhitelistToggle = () => {
    dispatch(toggleWhitelist(data.id));
  };

  const { name, price, image } = data;

  return (
    <Card
      sx={{
        boxShadow: 3,
        borderRadius: 1,
        overflow: 'hidden',
        position: 'relative',
        '&:hover .favorite-icon': {
          opacity: 1
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia component="img" height="340" image={image} alt={name} />
        <IconButton
          onClick={handleWhitelistToggle}
          className="favorite-icon"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: isWhitelisted
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
            opacity: isWhitelisted ? 1 : 0,
            transition: 'opacity 0.3s'
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
