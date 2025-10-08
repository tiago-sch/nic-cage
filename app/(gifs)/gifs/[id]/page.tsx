import Head from "next/head"
import Link from "next/link"
import { notFound } from "next/navigation"

// API
import { getGiphyIdApiUrl } from "../../../../utils/helpers/service"
import Image from "next/image";

const GifPage = async ({ params }: { params: Promise<{ id: string }>}) => {
  const { id } = await params;
  const request = await fetch(getGiphyIdApiUrl(id))
  const { data } = await request.json()

  if (!data.id) {
    notFound();
  }

  const { title, images: { downsized_large, original_still } = {}} = data || {}

  return (
    <>
      <Head>
        <title>Nic Cage - {title || "GIF"}</title>
        <meta name="description" content={title || "Another perfect Nic Cage related GIF!"} />
        <meta property="og:image" content={original_still.url} />
      </Head>
      <div className="relative w-screen h-screen">
        <Link href='/gifs' passHref className="btn btn-secondary absolute top-4 left-4 z-20 shadow-xl">
          Back
        </Link>
        <Image
          unoptimized
          alt={`${title} - background`}
          src={original_still.url} 
          width={original_still.width}
          height={original_still.height}
          className="blur-md z-0 w-full h-full object-cover object-center absolute"
          loading="eager"
        />
        {downsized_large ? (
          <Image
            unoptimized
            alt={title}
            src={downsized_large.url}
            width={downsized_large.width}
            height={downsized_large.height}
            className="relative w-full h-full object-contain object-center z-2 drop-shadow-2xl"
            loading="eager"
          />
        ) : (
          <p>Loading</p>
        )}
      </div>
    </>
  )
}

export default GifPage
