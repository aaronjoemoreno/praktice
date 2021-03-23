module.exports = {
  siteMetadata: {
    title: `Praktice`,
    author: `@aaronjoemoreno`,
    details: ['One On One', 'Virtual Classes', 'Photoshoots', 'Education', 'Consultations', 'Webinars'],
    description: 'An exclusive versatile wellness studio serving practitioners and their clients at a reasonable cost.'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: 'svgfoloy',
        dataset: `production`,
        token: process.env.SANITY_TOKEN,
        graphqlTag: 'default',
        watchMode: true,
      },
    },
  ],
}
