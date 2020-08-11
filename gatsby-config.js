module.exports = {
  siteMetadata: {
    title: `Home | Aakash Raina`,
    description: `Aakash raina's blog`,
    author: `@AakashRaina`,
    twitter: `https://twitter.com/Bluecoolant`,
    github: `https://github.com/AakashRaina`,
    linkedIn: `https://www.linkedin.com/in/aakashraina/`,
    mailto: `mailto:aakashraina9@gmail.com`,
    resume: `https://www.dropbox.com/s/3gzd4w5uxsew941/Aakash_Raina_Resume.pdf?dl=0`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-stylus`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              theme: `oceanic-next`,
            },
          },
        ],
      },
    },
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
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
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
