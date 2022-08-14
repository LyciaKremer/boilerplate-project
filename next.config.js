const withImages = require('next-images')

module.exports = withImages({
  reactStrictMode: true,
  esModule: true,
  compiler: {
    styledComponents: true | {
      ssr: true,
    },
  },
})
