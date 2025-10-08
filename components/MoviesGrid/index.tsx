import { Movie } from "../../types"
import MovieCard from "./MovieCard"

type MoviesGrid = {
  movies: Movie[],
  withJob?: boolean;
}

const MoviesGrid = ({ movies, withJob }: MoviesGrid) => {
  return (
    <ul className="flex flex-wrap flex-row gap-3 md:gap-6 justify-center">
      {movies.map(movie => (
        <MovieCard
          movie={movie}
          key={`movie-${movie.id}-${movie.job || "actor"}`}
          withJob={withJob}
        />
      ))}
    </ul>
  )
}

export default MoviesGrid;
