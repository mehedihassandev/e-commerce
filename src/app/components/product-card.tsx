import FavoriteIcon from '@mui/icons-material/Favorite';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton'; // Import Skeleton
import Typography from '@mui/material/Typography';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const isWhitelisted = useSelector((state: RootState) =>
    state.whitelistReducer.whitelistedProducts.includes(data.id)
  );

  const handleWhitelistToggle = () => {
    dispatch(toggleWhitelist(data.id));
  };

  const { name, price, image } = data;

  const handleProductClick = () => {
    // Navigate to the product details page using product id
    navigate(`/product/${data.id}`);
  };

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card
      sx={{
        boxShadow: 3,
        borderRadius: 1,
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        '&:hover .favorite-icon': {
          opacity: 1
        }
      }}
      onClick={handleProductClick}
    >
      <Box sx={{ position: 'relative' }}>
        {loading ? (
          <Skeleton variant="rectangular" height={340} />
        ) : (
          <CardMedia component="img" height="340" image={image} alt={name} />
        )}
        {loading ? (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{ position: 'absolute', top: 10, right: 10 }}
          />
        ) : (
          <IconButton
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
            onClick={(e) => {
              e.stopPropagation();
              handleWhitelistToggle();
            }}
          >
            <FavoriteIcon />
          </IconButton>
        )}
      </Box>
      <CardContent>
        {loading ? (
          <>
            <Skeleton width="80%" />
            <Skeleton width="60%" />
          </>
        ) : (
          <>
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontSize: '1.3rem',
                pt: 1
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontSize: '1rem',
                pt: 1
              }}
            >
              {price}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
