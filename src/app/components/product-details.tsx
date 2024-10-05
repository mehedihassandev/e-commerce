import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../redux/store';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  const product = useSelector((state: RootState) =>
    state.productReducer.products.find((p) => p.id === parseInt(id || '', 10))
  );

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4">{product.name}</Typography>
      <Typography variant="h6">{product.price}</Typography>
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />
    </Box>
  );
};

export default ProductDetails;
