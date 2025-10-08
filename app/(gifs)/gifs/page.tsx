"use client"

import Head from "next/head"
import { useCallback, useEffect, useRef, useState } from "react"
import GifsMasonry from "../../../components/GifsMasonry"
import ScrollToTop from "../../../components/ScrollToTop"
import { GIFImage } from "../../../types"
import Header from "../../../components/Header"

const PAGE_SIZE = 20;

const GifsPage = () => {
  const [gifs, setGifs] = useState<GIFImage[]>([]);
  const [page, setPage] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const fetchMore = useCallback(async () => {
    const newPage = page + 1;
    const offset = newPage * PAGE_SIZE;
    
    if (buttonRef.current) {
      buttonRef.current.disabled = true;
    }

    const res = await fetch(`/api/gifs/?offset=${offset}`)
    const { data } = await res.json() as { data: GIFImage[] }
    setGifs([...gifs, ...data]);
    setPage(newPage);
    
    if (buttonRef.current) {
      buttonRef.current.disabled = false;
    }
  }, [gifs, page]);

  useEffect(() => {
    fetchMore();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>Nic Cage - GIFs</title>
        <meta name="description" content="A mighty list of Nic Cage related GIFs!" />
      </Head>

      <Header/>
      <main className="container mx-auto px-4">
        <h1 className="my-6 text-center text-4xl font-bold">GIFs</h1>

        <GifsMasonry gifs={gifs} />

        <div className="w-full text-center pt-6 pb-10">
          <button ref={buttonRef} onClick={fetchMore} className="btn btn-lg btn-neutral">
            Load More
          </button>
        </div>

      </main>
      <ScrollToTop />
    </>
  )
}

export default GifsPage
