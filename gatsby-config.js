const path = require('path')

module.exports = {
  pathPrefix: "/disident",
  plugins: [
    {
      resolve: `gatsby-theme-potato`,
      options: {
        postsPrefix: 'posts'
      }
    },
    `gatsby-plugin-typescript`
  ],
  siteMetadata: {
    title: 'El disidente 🤬',
    siteUrl: 'https://eldisidente.io',
    description:
      'Este es...',
    lang: 'es'
  }
}
