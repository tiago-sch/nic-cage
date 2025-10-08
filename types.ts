export type Movie = {
  id: string;
  title: string;
  release_date: string;
  poster_path: string;
  character: string;
  job: string;
};

type GiphyImage = {
  height: string;
  width: string;
  size: string;
  url: string;
}

export type GIFImage = {
  type: string;
  id: string;
  slug: string;
  url: string;
  title: string;
  images: {
    preview_gif: GiphyImage;
    downsized_large: GiphyImage;
    [key: string]: GiphyImage;
  };
}