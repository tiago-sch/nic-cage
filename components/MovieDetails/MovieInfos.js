import {
  MovieContentTitle,
  MovieOverview,
  MovieInfoTitle,
  MovieInfo,
  MoviePoster
} from './style'
import { getMoviePosterUrl } from '../../utils/helpers/service'

const MovieInfos = ({ movieInfo }) => {
  const {
    title,
    overview,
    genres,
    production_companies,
    production_countries,
    budget,
    release_date,
    runtime,
    poster_path
  } = movieInfo;

  const posterUrl = getMoviePosterUrl(poster_path)
  const posterLargeUrl = getMoviePosterUrl(poster_path, 'lg')

  return (
    <MovieOverview>
      <MovieContentTitle>Movie Details</MovieContentTitle>

      <MovieInfoTitle>Overview</MovieInfoTitle>
      <MovieInfo>{overview || "-"}</MovieInfo>

      <MovieInfoTitle>{genres.lenght === 1 ? 'Genre' : 'Genres'}</MovieInfoTitle>
      <MovieInfo>{genres.map(item => item.name).join(', ')}</MovieInfo>

      <MovieInfoTitle>Release Date</MovieInfoTitle>
      <MovieInfo>{release_date.replace(/-/g, '/') || 'To be released'}</MovieInfo>

      {!!runtime && (
        <>
          <MovieInfoTitle>Runtime</MovieInfoTitle>
          <MovieInfo>{runtime} min</MovieInfo>
        </>
      )}

      <MovieInfoTitle>Production Companies</MovieInfoTitle>
      <MovieInfo>{production_companies.map(item => item.name).join(', ')}</MovieInfo>

      <MovieInfoTitle>Production Countries</MovieInfoTitle>
      <MovieInfo>{production_countries.map(item => item.name).join(', ')}</MovieInfo>

      {!!budget && (
        <>
          <MovieInfoTitle>Budget</MovieInfoTitle>
          <MovieInfo>$ {String(budget).replace(/(.)(?=(\d{3})+$)/g,'$1,')}</MovieInfo>
        </>
      )}

      {poster_path && (
        <>
          <MovieInfoTitle>Poster</MovieInfoTitle>
          <MovieInfo>
            <a href={posterLargeUrl} target="_blank">
              <MoviePoster src={posterUrl} alt={`"${title}" poster`} />
            </a>
          </MovieInfo>
        </>
      )}
    </MovieOverview>
  )
};

export default MovieInfos;
