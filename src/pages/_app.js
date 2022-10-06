import Head from 'next/head';
import { ZeiqProvider } from '@zeiq/web';
import { StoreProvider } from 'easy-peasy';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ApolloProvider } from '@apollo/client/react';
import NProgress from 'nprogress';
import Router from 'next/router';
import theme, { GlobalStyle } from '../utils/theme';
import withReduxStore from '../utils/with-redux-store';
import apolloClient from '../utils/apolloClient';
import config from '../utils/config';
import '../utils/global.css';

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, reduxStore }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <script async src="/scripts.js" />
      </Head>
      <DefaultSeo
        titleTemplate={`%s | ${config.siteName}`}
        description="Free Images Gallery Builder"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: config.siteUrl,
          site_name: config.siteName
        }}
        twitter={{
          handle: '@galllery',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <ThemeProvider theme={theme}>
        <StoreProvider store={reduxStore}>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
            <GlobalStyle />
          </ApolloProvider>
        </StoreProvider>
      </ThemeProvider>
    </>
  );
}

export default withReduxStore(MyApp);
