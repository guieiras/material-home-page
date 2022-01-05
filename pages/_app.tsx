import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import React from 'react';

import theme from '../src/components/theme';
import { createEmotionCache, AppPropsWithEmotion } from '../src/util/emotion';

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, emotionCache, pageProps }: AppPropsWithEmotion): JSX.Element {
  return (
    <CacheProvider value={emotionCache || clientSideEmotionCache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
