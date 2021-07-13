import GlobalStyle from '../styles/GlobalStyles'
import Header from '../components/Header'
import Container from '../components/Container'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container as="main">
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default MyApp
