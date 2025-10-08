import Head from "next/head"
import Image from "next/image"

const Custom500 = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>500 - Caging issues</title>
      </Head>

      <div className="text-center">
        <Image
          src='/img/cage500.gif'
          width={480}
          height={270}
          alt='500'
        />
      </div>

      <h1>500 - Caging issues</h1>

    </>
  )
}

export default Custom500
