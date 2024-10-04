import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from './navigation/RouterConfig';
import { NetworkDetector, NotificationProvider } from './utils/src';
import { ThemeProviderWrapper } from './utils/src/lib/theme';

function App() {
  return (
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
  );
}

export default App;
