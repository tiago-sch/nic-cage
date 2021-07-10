import { GIPHY_API_URL } from '../constants/giphy';

export const getGiphyApiUrl = (offset = 0) =>
  `${GIPHY_API_URL}gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=nic-cage&limit=20&offset=${offset}&rating=G&lang=en`

export const getGiphyIdApiUrl = id =>
  `${GIPHY_API_URL}gifs/${id}?api_key=${process.env.GIPHY_API_KEY}&lang=en`
