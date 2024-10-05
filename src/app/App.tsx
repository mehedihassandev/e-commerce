import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from './navigation/RouterConfig';
import { NetworkDetector, NotificationProvider } from './utils/src';
import { ThemeProviderWrapper } from './utils/src/lib/theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NetworkDetector>
        <BrowserRouter>
          <ThemeProviderWrapper>
            <NotificationProvider>
              <CssBaseline />
              <RouterConfig />
            </NotificationProvider>
          </ThemeProviderWrapper>
        </BrowserRouter>
      </NetworkDetector>
    </QueryClientProvider>
  );
}

export default App;
