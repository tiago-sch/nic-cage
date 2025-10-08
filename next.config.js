module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      new URL("https://image.tmdb.org/**"),
      new URL("https://*.giphy.com/**"),
    ],
  },
}