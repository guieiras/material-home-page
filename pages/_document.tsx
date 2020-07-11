import { ServerStyleSheets } from '@material-ui/core/styles';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

import theme from '../src/components/theme';

export default class AppDocument extends Document {
  get lang(): string {
    return (this.props.__NEXT_DATA__.props.pageProps?.layout?.currentLanguage || '').split('-')[0];
  }

  render(): JSX.Element {
    return (
      <Html lang={this.lang}>
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
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
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
