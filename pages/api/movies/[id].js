import { getMovieDetailsApiUrl, getMovieCreditsApiUrl } from '../../../utils/helpers/service';

export default async (req, res) => {
  const { id } = req.query;
  const request = await fetch(getMovieDetailsApiUrl(id))
  const data = await request.json()

  if (!data.id) {
    res.status(404).json({ error: true, message: 'NOT FOUND' })
    return
  }

  const creditsRequest = await fetch(getMovieCreditsApiUrl(id))
  const { cast, crew } = await creditsRequest.json()

  res.status(200).json({ ...data, cast, crew })
}
