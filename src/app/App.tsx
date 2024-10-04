import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './layout';
import { RouterConfig } from './navigation/RouterConfig';
import { NetworkDetector, NotificationProvider } from './utils/src';
import { ThemeProviderWrapper } from './utils/src/lib/theme';

function App() {
  return (
    <NetworkDetector>
      <BrowserRouter>
        <ThemeProviderWrapper>
          <Layout>
            <NotificationProvider>
              <CssBaseline />
              <RouterConfig />
            </NotificationProvider>
          </Layout>
        </ThemeProviderWrapper>
      </BrowserRouter>
    </NetworkDetector>
  );
}

export default App;
