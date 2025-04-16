'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

export const ThemeRegistry = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
