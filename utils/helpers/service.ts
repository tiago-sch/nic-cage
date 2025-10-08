import { Movie } from "../../types";
import {
  GIPHY_API_URL,
  TMDB_API_URL,
  NIC_CAGE_TMDB_ID,
  TMDB_IMG_URL,
  TMDB_POSTER_SIZES,
  TMDB_BACKDROP_SIZES
} from "../constants/service";

export const getGiphyApiUrl = (offset = 0) =>
  `${GIPHY_API_URL}gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=nic-cage&limit=20&offset=${offset}&rating=G&lang=en`

export const getGiphyIdApiUrl = (id: string) =>
  `${GIPHY_API_URL}gifs/${id}?api_key=${process.env.GIPHY_API_KEY}&lang=en`

export const getMoviesApiUrl = () =>
  `${TMDB_API_URL}person/${NIC_CAGE_TMDB_ID}/movie_credits?api_key=${process.env.TMDB_API_KEY}`

export const getMovieDetailsApiUrl = (id: string) =>
  `${TMDB_API_URL}movie/${id}?api_key=${process.env.TMDB_API_KEY}`

export const getMovieCreditsApiUrl = (id: string) =>
`${TMDB_API_URL}movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}`

export const getMoviePosterUrl = (path: string, size = "md") =>
  `${TMDB_IMG_URL}${TMDB_POSTER_SIZES[size]}${path}`;

export const getBackdropUrl = (path: string, size = "md") =>
  `${TMDB_IMG_URL}${TMDB_BACKDROP_SIZES[size]}${path}`;

export const sortMoviesByYear = (a: Movie, b: Movie) => {
  if (!a?.release_date) return 1;
  if (!b?.release_date) return -1;
  const aDate = a.release_date.split("/").reverse().join("");
  const bDate = b.release_date.split("/").reverse().join("");
  return aDate > bDate ? 1 : aDate < bDate ? -1 : 0;
};
