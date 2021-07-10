import Head from 'next/head'
import Link from 'next/link'
import Container from '../components/Container'
import Title from '../components/Title'

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
          <Title>Nic Cage</Title>
          <p>
            <Link href='/gifs/'>
              <a>GIFS</a>
            </Link>
          </p>
        </Container>
      </main>
    </>
  )
}
