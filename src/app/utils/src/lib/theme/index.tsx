import { CssBaseline, ThemeProvider } from '@mui/material';
import { ReactElement } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import './base';

import { PureLightTheme } from './pure-light-theme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export interface ThemeProps {
  children: ReactElement;
}

export function ThemeProviderWrapper({ children }: ThemeProps) {
  return (
    <HelmetProvider>
      <ThemeProvider theme={PureLightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default ThemeProviderWrapper;
