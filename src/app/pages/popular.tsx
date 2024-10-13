// const Popular = () => {
//   // const { data, isLoading, refetch } = useQuery({
//   //   queryKey: ['product', { quantity: 1 }],
//   //   queryFn: () => {
//   //     return fetchProduct({
//   //       api: axios,
//   //       url: ''
//   //     });
//   //   },
//   //   select: (data) => data.data,
//   //   staleTime: Infinity
//   // });

//   console.log('data', data);

//   if (isLoading) return <div>Loading...</div>;
//   // if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h1>
//         {data?.data?.map((name: { name: string }) => {
//           return name.name;
//         })}
//       </h1>
//       <button onClick={() => refetch()}>Refetch</button>
//     </div>
//   );
// };

// export default Popular;
