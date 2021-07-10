import Head from 'next/head'
import { useState } from 'react'
import Container from '../../components/Container'
import GifsMasonry from '../../components/GifsMasonry'
import ScrollToTop from '../../components/ScrollToTop'
import Title from '../../components/Title'
import { NavigationWrapper, NavigationButton } from '../../styles/GifsPage'

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
      </Head>
      <main>
        <Container>
          <Title>Nic Cage GIFs</Title>

          <GifsMasonry gifs={gifs} />

          <NavigationWrapper>
            <NavigationButton onClick={fetchMore}>
              Load More
            </NavigationButton>
          </NavigationWrapper>
        </Container>

        <ScrollToTop />
      </main>
    </>
  )
}

export const getStaticProps = async (ctx) => {
  const res = await fetch(`${process.env.API_URL}/api/gifs/`)
  const { data, pagination } = await res.json()
  return {
    props: {
      data,
      pagination
    },
    revalidate: 60 * 4
  }
}

export default GifsPage
