import React from 'react';
import { Head } from 'components/layout/page/_partials/head';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import { theme } from 'styles/theme';
import Router from 'next/router'
import NProgress from 'nprogress';

import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';

export default function App({ Component, pageProps, router }) {
  
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());
  
  return (
    <>
      <GlobalStyle />
      <Head />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <ToastContainer />
      </ThemeProvider>
    </>
  )
}