import Link from "next/link"
import Image from "next/image";
import { getMoviePosterUrl } from "../../utils/helpers/service"
import type { Movie } from "../../types";

type MovieCardProps = {
  movie: Movie,
  withJob?: boolean,
}

const MovieCard = ({ movie, withJob }: MovieCardProps) => {
  const {
    id,
    title,
    release_date,
    poster_path,
    character,
    job
  } = movie;

  const movieYear = release_date?.substring(0, 4)
  const moviePoster = !!poster_path ? getMoviePosterUrl(poster_path, "md") : "/img/poster-placeholder.jpg"

  return (
    <li className="w-80 md:text-center">
      <Link
        href="/movies/[id]"
        as={`/movies/${id}`}
        passHref
        className="flex flex-row md:flex-col items-center gap-6 hover:bg-base-300 md:py-6 p-2 rounded-lg transition-all"
      >
        <Image
          className="mx-auto rounded-lg w-1/3 md:w-[200px]"
          src={moviePoster}
          alt={title}
          loading="lazy"
          decoding="async"
          height={300}
          width={200}
        />
        <div className="grow">
          <h3 className="text-lg font-bold">
            {title}
            {release_date && <small className="text-neutral"> ({movieYear})</small>}
          </h3>
          {(character || job) && <p className="text-secondary text-sm">{withJob ? job : character}</p>}
        </div>
      </Link>
    </li>
  )
}

export default MovieCard;
