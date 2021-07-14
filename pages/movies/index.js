import Head from 'next/head'
import ScrollToTop from '../../components/ScrollToTop'
import Title from '../../components/Title'
import MoviesGrid from '../../components/MoviesGrid'

// API
import { getMoviesApiUrl, sortMoviesByYear } from '../../utils/helpers/service';

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
  const request = await fetch(getMoviesApiUrl())
  const { cast, crew } = await request.json()

  return {
    props: {
      cast: cast.sort(sortMoviesByYear).reverse(),
      crew: crew.sort(sortMoviesByYear).reverse()
    },
    revalidate: 60 * 60 * 24 * 7
  }
}

export default GifsPage
