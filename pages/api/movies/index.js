import { getMoviesApiUrl } from '../../../utils/helpers/service';

const sortMoviesByYear = (a, b) => {
  if (!a?.release_date) return 1;
  if (!b?.release_date) return -1;
  const aDate = a.release_date.split('/').reverse().join('');
  const bDate = b.release_date.split('/').reverse().join('');
  return aDate > bDate ? 1 : aDate < bDate ? -1 : 0;
};

export default async (req, res) => {
  const request = await fetch(getMoviesApiUrl())
  const { cast, crew } = await request.json()

  res.status(200).json({
    cast: cast.sort(sortMoviesByYear).reverse(),
    crew: crew.sort(sortMoviesByYear).reverse()
  })
}
