import Head from "next/head"
import Image from "next/image"

const Custom404 = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>404 - Cage Not Found</title>
      </Head>

      <div className="text-center">
        <Image
          src='/img/cage404.gif'
          width={254}
          height={194}
          alt='404'
        />
      </div>

      <h1>404 - Cage Not Found</h1>
    </>
  )
}

export default Custom404
