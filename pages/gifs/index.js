import Head from 'next/head'
import { useState } from 'react'
import GifsMasonry from '../../components/GifsMasonry'
import ScrollToTop from '../../components/ScrollToTop'
import Title from '../../components/Title'
import { NavigationWrapper, NavigationButton } from '../../styles/GifsPage'

// API
import { getGiphyApiUrl } from '../../utils/helpers/service';

const GifsPage = ({ data, pagination }) => {
  const [gifs, setGifs] = useState(data);
  const [page, setPage] = useState(0);

  const fetchMore = e => {
    const { target } = e;
    const newPage = page+1;
    const offset = newPage * pagination.count;
    target.disabled = true;

    fetch(`/api/gifs/?offset=${offset}`)
    .then(res => res.json())
    .then(({ data }) => {
      setGifs([...gifs, ...data]);
      setPage(newPage);
      target.disabled = false;
    });
  }

  return (
    <>
      <Head>
        <title>Nic Cage - GIFs</title>
        <meta name="description" content="A mighty list of Nic Cage related GIFs!" />
      </Head>

      <Title>GIFs</Title>

      <GifsMasonry gifs={gifs} />

      <NavigationWrapper>
        <NavigationButton onClick={fetchMore}>
          Load More
        </NavigationButton>
      </NavigationWrapper>

      <ScrollToTop />
    </>
  )
}

export const getStaticProps = async (ctx) => {
  const request = await fetch(getGiphyApiUrl(0))
  const { data, pagination } = await request.json()
  return {
    props: {
      data,
      pagination
    },
    revalidate: 60 * 4
  }
}

export default GifsPage
