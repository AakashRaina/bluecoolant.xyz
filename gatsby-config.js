module.exports = {
  siteMetadata: {
    title: `Home | Bluecoolant`,
    description: `Aakash raina's blog`,
    author: `@AakashRaina`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-stylus`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bluecoolant | Aakash Raina's Blog`,
        short_name: `Bluecoolant`,
        start_url: `/`,
        background_color: `#2ca2e9`,
        theme_color: `#2ca2e9`,
        display: `minimal-ui`,
        icon: `src/images/Aakash.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
