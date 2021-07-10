import Link from 'next/link'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { MasonryLink, MasonryImage } from './styles'

const GifsMasonry = ({ gifs }) => {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{320: 2, 720: 3, 960: 4, 1140: 5}}
    >
      <Masonry>
        {gifs.map(({ images: { preview_gif }, title, slug, id, }) => (
          <Link key={`gif-${id}`} href={'/gifs/[id]'} as={`/gifs/${id}`} passHref>
            <MasonryLink
              style={{ paddingBottom: `${(preview_gif.height/preview_gif.width)*100}%` }}
            >
              <MasonryImage src={preview_gif.url} alt={title} />
            </MasonryLink>
          </Link>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default GifsMasonry
