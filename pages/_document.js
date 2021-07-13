import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="The one true God" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicons/android-icon-96x96.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/android-icon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/android-icon-192x192.png" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
