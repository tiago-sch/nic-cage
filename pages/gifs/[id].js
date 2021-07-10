import Head from 'next/head'
import Link from 'next/link'
import { GifHolder, CageGif, BackButton } from '../../styles/GifsPage'

const GifPage = ({ data }) => {
  const { title, images: { downsized_large, original_still } = {}} = data || {}

  return (
    <>
      <Head>
        <title>Nic Cage - {title || 'GIF'}</title>
      </Head>
      <GifHolder $background={original_still.url}>
        <Link href='/gifs'>
          <BackButton>
            Back
          </BackButton>
        </Link>
        {downsized_large ? (
          <CageGif src={downsized_large.url} width={downsized_large.width} height={downsized_large.height} />
        ) : (
          <p>Loading</p>
        )}
      </GifHolder>
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  };
}

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const res = await fetch(`${process.env.API_URL}/api/gifs/${id}`)
  const data = await res.json()
  return {
    props: { data }
  }
}

export default GifPage
