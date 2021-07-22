import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import GlobalStyle from '../styles/GlobalStyles'
import Header from '../components/Header'
import Container from '../components/Container'

const CANONICAL_DOMAIN = 'https://nicolas-cage.com';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const canonicalURL = `${CANONICAL_DOMAIN}${router.asPath === '/' ? '' : router.asPath}`;

  const handleRouteChange = url => {
    window.gtag('config', process.env.GA_TRACKING, {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalURL} />
      </Head>
      <GlobalStyle />
      {pageProps.noHeader ? (
        <Component {...pageProps} />
      ) : (
        <>
          <Header />
          <Container as="main">
            <Component {...pageProps} />
          </Container>
        </>
      )}
    </>
  )
}

export default MyApp
