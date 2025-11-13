import '../styles/globals.css';
import '../styles/nprogress.css';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import { useEffect } from 'react';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }) {
  // simple theme class for gold/black
  useEffect(() => {
    document.documentElement.style.setProperty('--gold', '#f0b90b');
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
