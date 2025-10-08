import Image from "next/image"
import { type PropsWithChildren } from "react";
import { getMoviePosterUrl } from "../../utils/helpers/service"

const MovieInfoBlock = ({ title, children }: { title: string, } & PropsWithChildren) => {
  return (
    <div className="pb-4">
      <h3 className="text-lg font-bold pb-2">{title}</h3>
      <div className="pl-10">{children}</div>
    </div>
  )
}

const MovieInfos = ({ movieInfo }) => {
  const {
    title,
    overview,
    genres,
    imdb_id,
    production_companies,
    production_countries,
    budget,
    release_date,
    runtime,
    poster_path
  } = movieInfo;

  const posterUrl = getMoviePosterUrl(poster_path)
  const posterLargeUrl = getMoviePosterUrl(poster_path, "lg")

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold pb-4">Movie Details</h2>

      <MovieInfoBlock title="Overview">
        <p>{overview || "-"}</p>
      </MovieInfoBlock>

      <MovieInfoBlock title={genres.length === 1 ? "Genre" : "Genres"}>
        <p>{genres.map(item => item.name).join(", ")}</p>
      </MovieInfoBlock>

      <MovieInfoBlock title="Release Date">
        <p>{release_date.replace(/-/g, "/") || "To be released"}</p>
      </MovieInfoBlock>

      {!!runtime && (
        <MovieInfoBlock title="Runtime">
          <p>{runtime} min</p>
        </MovieInfoBlock>
      )}

      {!!imdb_id && (
        <MovieInfoBlock title="IMDB">
          <a href={`https://www.imdb.com/title/${imdb_id}`} className="btn btn-sm btn-secondary" target="_blank" rel="noopener noreferrer">Link</a>
        </MovieInfoBlock>
      )}

      {!!production_companies.length && (
        <MovieInfoBlock title="Production Companies">
          <p>{production_companies.map(item => item.name).join(", ")}</p>
        </MovieInfoBlock>
      )}

      {!!production_countries.length && (
        <MovieInfoBlock title="Production Countries">
          <p>{production_countries.map(item => item.name).join(", ")}</p>
        </MovieInfoBlock>
      )}

      {!!budget && (
        <MovieInfoBlock title="Budget">
          <p>$ {String(budget).replace(/(.)(?=(\d{3})+$)/g,"$1,")}</p>
        </MovieInfoBlock>
      )}

      {poster_path && (
        <MovieInfoBlock title="Poster">
          <a href={posterLargeUrl} target="_blank">
            <Image src={posterUrl} className="rounded-lg" alt={`"${title}" poster`} width={200} height={300} />
          </a>
        </MovieInfoBlock>
      )}
    </div>
  )
};

export default MovieInfos;
