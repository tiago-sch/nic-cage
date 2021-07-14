import { getGiphyApiUrl } from '../../../utils/helpers/service';

export default async (req, res) => {
  const { offset } = req.query;
  const request = await fetch(getGiphyApiUrl(offset || 0))
  const { data } = await request.json()
  res.status(200).json({ data })
}
