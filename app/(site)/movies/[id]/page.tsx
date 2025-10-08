import Head from "next/head"
import Image from "next/image"
import { notFound } from "next/navigation"
import ScrollToTop from "../../../../components/ScrollToTop"
import MovieDetails from "../../../../components/MovieDetails"
import { getBackdropUrl } from "../../../../utils/helpers/service"

// API
import { getMovieDetailsApiUrl, getMovieCreditsApiUrl } from "../../../../utils/helpers/service"

const MoviePage = async ({ params }: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params;
  const request = await fetch(getMovieDetailsApiUrl(id))
  const data = await request.json()

  const creditsRequest = await fetch(getMovieCreditsApiUrl(id))
  const { cast, crew } = await creditsRequest.json()

  if (!data.id) {
    notFound();
  }

  const {
    title,
    backdrop_path,
    release_date,
    tagline,
    overview
  } = data;

  const movieYear = release_date?.substring(0,4);

  const backdrop = !!backdrop_path && getBackdropUrl(backdrop_path, "md");

  return (
    <>
      <Head>
        <title>Nic Cage - {title || "Movie"}{movieYear && ` (${movieYear})`}</title>
        <meta name="description" content={tagline || overview || "Another perfect movie with Nic Cage!"} />
        <meta property="og:title" content={`${title}${movieYear && ` (${movieYear})`}`} />
        <meta property="og:type" content="video.movie" />
        {!!backdrop && (
          <meta property="og:image" content={backdrop} />
        )}
      </Head>

      <div className="pb-12">
        <div className="bg-black rounded-xl relative h-[200px] md:h-[300px] lg:h-[450px] overflow-hidden mb-6">
          {backdrop ? (
            <Image
              src={backdrop}
              alt={title || "Nic Cage Movie"}
              width={800}
              height={450}
              className="min-w-full min-h-full absolute top-[50%] -translate-y-[50%] left-0 opacity-[.4] pointer-events-none z-0"
              loading="eager"
              
            />
          ) : (
            <div className="min-w-full min-h-full absolute top-0 left-0 bg-linear-to-t from-info-content to-info opacity-[.2] z-0"></div>
          )}
          <div className="w-full h-full p-5 flex gap-2 flex-col justify-end z-10 relative">
            <h1 className="text-4xl font-bold">
              {title} {movieYear && <small className="text-lg text-secondary">({movieYear})</small>}
            </h1>
            {tagline && <span>&quot;{tagline}&ldquo;</span>}
          </div>
        </div>

        <MovieDetails movie={{ ...data, cast, crew }}/>

        <ScrollToTop />
      </div>
    </>
  )
}

export default MoviePage
