import Head from 'next/head'
import ScrollToTop from '../../components/ScrollToTop'
import Title from '../../components/Title'
import MoviesGrid from '../../components/MoviesGrid'

const GifsPage = ({ cast, crew }) => {

  return (
    <>
      <Head>
        <title>Nic Cage - Movies</title>
      </Head>

      <Title>Movies</Title>

      <MoviesGrid movies={cast} />

      <Title as='h2'>Others (as crew)</Title>

      <MoviesGrid movies={crew} withJob />

      <ScrollToTop />
    </>
  )
}

export const getStaticProps = async (ctx) => {
  const res = await fetch(`${process.env.API_URL}/api/movies/`)
  const { cast, crew } = await res.json()
  return {
    props: { cast, crew },
    revalidate: 60 * 60 * 24 * 7
  }
}

export default GifsPage
