import Head from 'next/head'
import Image from 'next/image'
import Title from '../components/Title'
import Text from '../components/Text'

const Custom500 = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>500 - Caging issues</title>
      </Head>

      <Text $align="center" as="div">
        <Image
          src='/img/cage500.gif'
          width={480}
          height={270}
          alt='500'
        />
      </Text>

      <Title>500 - Caging issues</Title>

    </>
  )
}

export default Custom500
