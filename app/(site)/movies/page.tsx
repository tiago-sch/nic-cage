import Head from "next/head"
import ScrollToTop from "../../../components/ScrollToTop"
import MoviesGrid from "../../../components/MoviesGrid"

// API
import { getMoviesApiUrl, sortMoviesByYear } from "../../../utils/helpers/service";
import { Movie } from "../../../types";

const MoviesPage = async () => {
  const request = await fetch(getMoviesApiUrl())
  const rawData = await request.json() as { cast: Movie[], crew: Movie[]}

  const cast = rawData.cast?.sort(sortMoviesByYear).reverse() || [];
  const crew = rawData.crew?.sort(sortMoviesByYear).reverse() || [];

  return (
    <>
      <Head>
        <title>Nic Cage - Movies</title>
        <meta name="description" content="A mighty list of Nic Cage movies!" />
      </Head>

      <div className="pb-12">
        <h1 className="my-6 text-center text-4xl font-bold">Movies</h1>

        <MoviesGrid movies={cast} />

        <h2 className="my-6 text-center text-4xl font-bold">Others (as crew)</h2>

        <MoviesGrid movies={crew} withJob />

        <ScrollToTop />
      </div>
    </>
  )
}

export default MoviesPage;
