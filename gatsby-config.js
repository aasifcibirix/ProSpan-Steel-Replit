/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `ProSpan Steel`,
    siteUrl: `https://www.prospansteel.com`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: '@sensei/gatsby-source-sensei',
      options: {
        host: process.env.GATSBY_SENSEI_HOST,
        spaceId: process.env.GATSBY_SENSEI_SPACE_ID,
        accessToken: process.env.GATSBY_SENSEI_ACCESS_TOKEN,
        environment: 'master',
        // Keeps every existing `allContentful*` GraphQL query working
        // unchanged — the source plugin emits both `Sensei*` and
        // `Contentful*` node types when this is on.
        contentfulCompat: true,
      }
    },
    "gatsby-plugin-root-import",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/",
        "icon": `src/images/favicon.png`,
      },
      __key: "pages"
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WLK8G95H",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "",
        sitemap: "https://www.prospansteel.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: ["/"], Disallow: ["/page-data/"] }],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.prospansteel.com`,
        stripQueryString: true,
      },
    }
  ]
};
