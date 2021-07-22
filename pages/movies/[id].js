import Head from 'next/head'
import DefaultErrorPage from 'next/error'
import {
  Banner,
  BannerContainer,
  BannerTitle,
  BannerTagline,
} from '../../styles/MoviePage'
import MovieDetails from '../../components/MovieDetails'
import ScrollToTop from '../../components/ScrollToTop'
import useBreakpoint from '../../utils/hooks/useBreakpoint'
import { getBackdropUrl } from '../../utils/helpers/service'

// API
import { getMovieDetailsApiUrl, getMovieCreditsApiUrl } from '../../utils/helpers/service'

const MoviePage = ({ data, error }) => {
  if (error) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    )
  }

  const {
    title,
    backdrop_path,
    release_date,
    tagline,
    overview
  } = data;
  const { isDesktop, isTablet } = useBreakpoint();

  const movieYear = release_date?.substring(0,4);

  const backdropSize = () => {
    if (isDesktop) return 'lg';
    if (isTablet) return 'md';
    return 'sm';
  }

  const backdrop = backdrop_path && getBackdropUrl(backdrop_path, backdropSize());

  return (
    <>
      <Head>
        <title>Nic Cage - {title || 'Movie'}{movieYear && ` (${movieYear})`}</title>
        <meta name="description" content={tagline || overview || 'Another perfect movie with Nic Cage!'} />
        <meta property="og:title" content={`${title}${movieYear && ` (${movieYear})`}`} />
        <meta property="og:type" content="video.movie" />
        {!!backdrop && (
          <meta property="og:image" content={backdrop} />
        )}
      </Head>

      <Banner $background={backdrop}>
        <BannerContainer>
          <BannerTitle>
            {title} {movieYear && <small>({movieYear})</small>}
          </BannerTitle>
          {tagline && <BannerTagline>"{tagline}"</BannerTagline>}
        </BannerContainer>
      </Banner>

      <MovieDetails movie={data}/>

      <ScrollToTop />
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  };
}

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;

  const request = await fetch(getMovieDetailsApiUrl(id))
  const data = await request.json()

  if (!data.id) {
    return { props: { error: true, message: 'NOT FOUND' }}
  }

  const creditsRequest = await fetch(getMovieCreditsApiUrl(id))
  const { cast, crew } = await creditsRequest.json()

  return {
    props: { data: { ...data, cast, crew } }
  }
}

export default MoviePage
