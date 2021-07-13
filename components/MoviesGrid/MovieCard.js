import Link from 'next/link'
import {
  MovieItem,
  MovieLink,
  MoviePoster,
  MovieTitle,
  MoviePosition
} from './style'
import { getMoviePosterUrl } from '../../utils/helpers/service'

const MovieCard = ({ movie, withJob }) => {
  const {
    id,
    title,
    release_date,
    poster_path,
    character,
    job
  } = movie;

  const movieYear = release_date?.substring(0, 4)
  const moviePoster = !!poster_path ? getMoviePosterUrl(poster_path, 'md') : '/img/poster-placeholder.jpg'

  return (
    <MovieItem>
      <Link href="#" passHref>
        <MovieLink>
          <MoviePoster
            src={moviePoster}
            alt={title}
            loading='lazy'
            decoding='async'
          />
          <MovieTitle>
            {title}
            {release_date && <small> ({movieYear})</small>}
          </MovieTitle>
          { (character || job) && <MoviePosition>{withJob ? job : character}</MoviePosition> }
        </MovieLink>
      </Link>
    </MovieItem>
  )
}

export default MovieCard;
