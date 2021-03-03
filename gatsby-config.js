module.exports = {
  pathPrefix: "/backend-garden",
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/index`,
      },
    },
  ],
  siteMetadata: {
    title: `Ankeet's backend garden`,
  },
}
