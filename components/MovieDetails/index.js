import { MovieDetailsContainer } from './style'
import MovieInfos from './MovieInfos'
import MovieCastCrew from './MovieCastCrew'

const MovieDetails = ({ movie }) => {
  const {
    cast,
    crew,
    ...movieDetails
  } = movie;

  return (
    <MovieDetailsContainer>
      <MovieInfos movieInfo={movieDetails} />
      <MovieCastCrew cast={cast} crew={crew} />
    </MovieDetailsContainer>
  )
}

export default MovieDetails
