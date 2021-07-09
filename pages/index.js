import Head from 'next/head'
import Container from '../components/Container'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nicolas Cage</title>
        <meta name="description" content="The One True God" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <h1>Nic Cage</h1>
        </Container>
      </main>
    </>
  )
}
