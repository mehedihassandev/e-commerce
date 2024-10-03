import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Typography variant="h1">{count}</Typography>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Button onClick={() => setCount(count - 1)}>Decrement</Button>
    </Box>
  );
}

export default App;
