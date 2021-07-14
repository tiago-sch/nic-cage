import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import Text from '../components/Text'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nic Cage</title>
        <meta name="description" content="The One True God" />
      </Head>

      <Text $align="center" as="div">
        <Image
          src="/favicons/ms-icon-310x310.png"
          width={310}
          height={310}
        />
      </Text>

      <Text $align="center">
        <Button
          href="https://www.tiagoschmidt.com/"
          as="a"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brought to you by Tiago Schmidt :)
        </Button>
      </Text>
    </>
  )
}
