import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StoreProvider } from 'easy-peasy';

import withReduxStore from '../utils/with-redux-store';
import theme, { GlobalStyle } from '../utils/theme';
import config from '../utils/config';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <StoreProvider store={reduxStore}>
          <>
            <Head>
              <title>{config.siteName}</title>
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
              />
            </Head>
            <Component {...pageProps} />
            <GlobalStyle />
          </>
        </StoreProvider>
      </ThemeProvider>
    );
  }
}

export default withReduxStore(MyApp);
