import { useEffect } from 'react';
import { useRouter } from 'next/router';
import GlobalStyle from '../styles/GlobalStyles'
import Header from '../components/Header'
import Container from '../components/Container'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

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
