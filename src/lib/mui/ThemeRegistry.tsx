'use client';

import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import theme from './theme';

export const ThemeRegistry = ({ children }: { children: React.ReactNode }) => {
  const { locale } = useParams() as { locale: string };
  const isRtl = locale === 'he';

  const cache = useMemo(() => {
    return createCache({
      key: isRtl ? 'mui-rtl' : 'mui',
      stylisPlugins: isRtl ? [prefixer, rtlPlugin] : [],
    });
  }, [isRtl]);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};
