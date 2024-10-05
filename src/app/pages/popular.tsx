import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { getProduct } from '../ui/src/lib/data-access/src/api-services/product-management';

const Popular = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['product', { quantity: 1 }],
    queryFn: () => {
      return getProduct({
        api: axios,
        url: `?_quantity=1`
      });
    },
    select: (data) => data.data,
    staleTime: Infinity
  });

  console.log('data', data);

  if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>
        {data?.data?.map((name: { name: string }) => {
          return name.name;
        })}
      </h1>
      <button onClick={() => refetch()}>Refetch</button>
    </div>
  );
};

export default Popular;
