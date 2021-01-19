module.exports = {
  siteMetadata: {
    title: `Praktice`,
    description: `PRAKTICE is a versatile wellness studio offering practitioners a private space to serve their clients at a reasonable cost.`,
    author: `@aaronjoemoreno`,
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
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.GATSBY_FIREBASE_API_KEY,
          authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.GATSBY_FIREBASE_PROJECT_ID,
          projectId: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
          storageBucket: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
          messagingSenderId: process.env.GATSBY_FIREBASE_APP_ID,
          appId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
        }
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
