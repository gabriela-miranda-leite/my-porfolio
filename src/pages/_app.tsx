import type {AppProps} from 'next/app';
import Head from 'next/head';
import React from 'react';

import {ThemeProvider} from 'styled-components';
import theme from '../styles/theme';
import GlobalStyles from '../styles/global';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link rel="shortcut icon" href="assets/favicon.ico" />
        <title>Gabriela Miranda</title>
        <meta
          name="description"
          content="Olá, sou Gabriela Miranda. Seja bem-vindo ao meu portfólio."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
