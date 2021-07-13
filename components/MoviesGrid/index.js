import Link from 'next/link'
import MovieCard from './MovieCard'
import { MoviesWrapper } from './style'

const MoviesGrid = ({ movies, withJob }) => {
  return (
    <MoviesWrapper>
      {movies.map(movie => (
        <MovieCard
          movie={movie}
          key={`movie-${movie.id}-${movie.job || 'actor'}`}
          withJob={withJob}
        />
      ))}
    </MoviesWrapper>
  )
}

export default MoviesGrid;
