import Head from 'next/head'
import Link from 'next/link'
import DefaultErrorPage from 'next/error'
import { GifHolder, CageGif, BackButton } from '../../styles/GifsPage'

// API
import { getGiphyIdApiUrl } from '../../utils/helpers/service';

const GifPage = ({ data, error }) => {
  if (error) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    )
  }

  const { title, images: { downsized_large, original_still } = {}} = data || {}

  return (
    <>
      <Head>
        <title>Nic Cage - {title || 'GIF'}</title>
        <meta name="description" content={title || "Another perfect Nic Cage related GIF!"} />
        <meta property="og:image" content={original_still.url} />
      </Head>
      <GifHolder $background={original_still.url}>
        <Link href='/gifs' passHref>
          <BackButton as='a'>
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

  const request = await fetch(getGiphyIdApiUrl(id))
  const { data } = await request.json()

  if (!data.id) {
    return { props: { error: true, message: 'NOT FOUND' }}
  }

  return {
    props: { data, noHeader: true }
  }
}

export default GifPage
