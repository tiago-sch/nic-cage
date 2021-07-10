import { getGiphyIdApiUrl } from '../../../utils/helpers/service';

export default async (req, res) => {
  const { id } = req.query;
  const request = await fetch(getGiphyIdApiUrl(id))
  const { data } = await request.json()

  if (!data.id) {
    res.status(404).json({ error: true, message: 'NOT FOUND' })
    return
  }

  res.status(200).json(data)
}
