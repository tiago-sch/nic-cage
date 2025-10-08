import Head from "next/head"
import Image from "next/image"

const Home = () => {
  return (
    <>
      <Head>
        <title>Nic Cage</title>
        <meta name="description" content="The One True God" />
      </Head>

      <div className="h-[calc(100vh-65px)] flex flex-col justify-center items-center gap-6">
        <Image
          src="/favicons/ms-icon-310x310.png"
          width={310}
          height={310}
          alt="NIC CAGE THE ULTIMATE GOD"
        />

        <p className="text-center">
          <a
            href="https://www.tiagoschmidt.com/"
            target="_blank"
            rel="noopener noreferrer"
            className='btn'
          >
            Brought to you by Tiago Schmidt :)
          </a>
        </p>
      </div>
    </>
  )
}

export default Home;
