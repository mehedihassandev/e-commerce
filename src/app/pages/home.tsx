import { Grid, Stack } from '@mui/material';
import ProductCard from '../components/product-card';
import { ContentWrapper } from '../utils/src';

const data = [
  {
    id: 1,
    name: 'Product 1',
    price: '$ 100',
    image:
      'https://img.freepik.com/free-psd/levitating-headphones-still-life_23-2150806962.jpg?t=st=1728116011~exp=1728119611~hmac=8480b7a4f9e5ab90369fbe6fb2628638993a165b56052e38bbca95b5930b8e0d&w=1380'
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$ 200',
    image:
      'https://img.freepik.com/free-psd/levitating-headphones-still-life_23-2150806962.jpg?t=st=1728116011~exp=1728119611~hmac=8480b7a4f9e5ab90369fbe6fb2628638993a165b56052e38bbca95b5930b8e0d&w=1380'
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$ 300',
    image:
      'https://img.freepik.com/free-psd/levitating-headphones-still-life_23-2150806962.jpg?t=st=1728116011~exp=1728119611~hmac=8480b7a4f9e5ab90369fbe6fb2628638993a165b56052e38bbca95b5930b8e0d&w=1380'
  },
  {
    id: 4,
    name: 'Product 4',
    price: '$ 400',
    image:
      'https://img.freepik.com/free-psd/levitating-headphones-still-life_23-2150806962.jpg?t=st=1728116011~exp=1728119611~hmac=8480b7a4f9e5ab90369fbe6fb2628638993a165b56052e38bbca95b5930b8e0d&w=1380'
  },
  {
    id: 5,
    name: 'Product 5',
    price: '$ 500',
    image:
      'https://img.freepik.com/free-psd/levitating-headphones-still-life_23-2150806962.jpg?t=st=1728116011~exp=1728119611~hmac=8480b7a4f9e5ab90369fbe6fb2628638993a165b56052e38bbca95b5930b8e0d&w=1380'
  },
  {
    id: 6,
    name: 'Product 6',
    price: '$ 600',
    image:
      'https://img.freepik.com/free-psd/levitating-headphones-still-life_23-2150806962.jpg?t=st=1728116011~exp=1728119611~hmac=8480b7a4f9e5ab90369fbe6fb2628638993a165b56052e38bbca95b5930b8e0d&w=1380'
  },
  {
    id: 7,
    name: 'Product 7',
    price: '$ 700',
    image:
      'https://img.freepik.com/free-psd/levitating-headphones-still-life_23-2150806962.jpg?t=st=1728116011~exp=1728119611~hmac=8480b7a4f9e5ab90369fbe6fb2628638993a165b56052e38bbca95b5930b8e0d&w=1380'
  },
  {
    id: 8,
    name: 'Product 8',
    price: '$ 800',
    image:
      'https://img.freepik.com/free-psd/levitating-headphones-still-life_23-2150806962.jpg?t=st=1728116011~exp=1728119611~hmac=8480b7a4f9e5ab90369fbe6fb2628638993a165b56052e38bbca95b5930b8e0d&w=1380'
  }
];

export const Home = () => {
  return (
    <ContentWrapper
      sx={{
        backgroundColor: 'transparent'
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: 'center',
          my: 3
        }}
      >
        <Grid container spacing={3}>
          {data?.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard data={product} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContentWrapper>
  );
};

export default Home;
