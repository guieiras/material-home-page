import createEmotionServer from '@emotion/server/create-instance';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import * as React from 'react';

import theme from '../src/components/theme';
import { createEmotionCache, EmotionEnhancedAppType } from '../src/util/emotion';

export default class AppDocument extends Document {
  get lang(): string {
    return (this.props.__NEXT_DATA__.props.pageProps?.layout?.currentLanguage || '').split('-')[0];
  }

  render(): JSX.Element {
    return (
      <Html lang={this.lang}>
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
        <body>
          <Main />
          {this.props.isDevelopment && <NextScript />}
        </body>
      </Html>
    );
  }
}

AppDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: EmotionEnhancedAppType) =>
        function AppEnhancer(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
    locale: ctx.locale,
  };
};
