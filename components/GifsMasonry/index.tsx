import Image from "next/image"
import Link from "next/link"

const GifsMasonry = ({ gifs }) => {
  return (
    <div
      className="grid items-start gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6"
    >
      {gifs.map(({ images: { preview_gif }, title, slug, id, }) => (
        <Link
          key={`gif-${id}-${slug}`}
          href={"/gifs/[id]"}
          as={`/gifs/${id}`}
          passHref
          className="w-full h-full p-3 bg-neutral hover:bg-secondary rounded-lg flex justify-center items-center"
        >
          <Image
            unoptimized
            width={preview_gif.width}
            height={preview_gif.height/preview_gif.width}
            src={preview_gif.url} alt={title}
            className="w-full max-h-full rounded-lg"
          />
        </Link>
      ))}
    </div>
  )
}

export default GifsMasonry
