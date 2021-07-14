import Head from 'next/head'
import Image from 'next/image'
import Title from '../components/Title'
import Text from '../components/Text'

const Custom404 = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>404 - Cage Not Found</title>
      </Head>

      <Text $align="center" as="div">
        <Image
          src='/img/cage404.gif'
          width={254}
          height={194}
          alt='404'
        />
      </Text>

      <Title>404 - Cage Not Found</Title>

    </>
  )
}

export default Custom404
