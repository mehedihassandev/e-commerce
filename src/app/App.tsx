import { BrowserRouter } from 'react-router-dom';

import { RouterConfig } from './navigation/RouterConfig';
import { Layout } from './layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <RouterConfig />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
