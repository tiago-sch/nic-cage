import Head from 'next/head'
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

const GifPage = ({ data }) => {
  const {
    title,
    backdrop_path,
    release_date,
    tagline,
  } = data;
  const { isDesktop, isTablet } = useBreakpoint();

  const movieYear = release_date?.substring(0,4);

  const backdropSize = () => {
    if (isDesktop) return 'lg';
    if (isTablet) return 'md';
    return 'sm';
  }

  return (
    <>
      <Head>
        <title>Nic Cage - {title || 'Movie'}</title>
      </Head>

      <Banner $background={backdrop_path && getBackdropUrl(backdrop_path, backdropSize())}>
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
  const res = await fetch(`${process.env.API_URL}/api/movies/${id}`)
  const data = await res.json()

  return {
    props: { data }
  }
}

export default GifPage
