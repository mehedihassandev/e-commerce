import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from './navigation/RouterConfig';
import { store } from './redux/store';
import { NotificationProvider } from './utils/src';
import { ThemeProviderWrapper } from './utils/src/lib/theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <ThemeProviderWrapper>
            <NotificationProvider>
              <CssBaseline />
              <RouterConfig />
            </NotificationProvider>
          </ThemeProviderWrapper>
        </BrowserRouter>
      </ReduxProvider>
    </QueryClientProvider>
  );
}

export default App;
