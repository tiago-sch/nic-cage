import MovieInfos from "./MovieInfos"
import MovieCastCrew from "./MovieCastCrew"

const MovieDetails = ({ movie }) => {
  const {
    cast,
    crew,
    ...movieDetails
  } = movie;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <MovieInfos movieInfo={movieDetails} />
      <MovieCastCrew cast={cast} crew={crew} />
    </div>
  )
}

export default MovieDetails
