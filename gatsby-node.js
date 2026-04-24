const path = require("path");
const { generateSitemapFiles } = require("./sitemap-generate");
const { cleanUrlSlash } = require("./src/utils");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const CustomPageTemplate = path.resolve("./src/templates/CustomPageTemplate.js");
  const ProductCategoryPageTemplate = path.resolve("./src/templates/ProductCategoryPageTemplate.js");
  const ProductPageTemplate = path.resolve("./src/templates/ProductPageTemplate.js");
  const StatePageTemplate = path.resolve("./src/templates/StatePageTemplate.js");
  const BlogPageTemplate = path.resolve("./src/templates/BlogPageTemplate.js");

  const allContentfulCustomPage = `
    allContentfulCustomPage {
      edges {
        node {
          id
          url
        }
      }
    }
  `;
  const allContentfulProductCategory = `
    allContentfulProductCategory {
      edges {
        node {
          id
          slug
          pageTemplate {
            id
            url
          }
        }
      }
    }
  `;
  const allContentfulProduct = `
    allContentfulProduct {
      edges {
        node {
          id
          slug
          pageTemplate {
            id
            url
          }
        }
      }
    }
  `;
  const allContentfulState = `
    allContentfulState {
      edges {
        node {
          id
          slug
          pageTemplate {
            id
            url
          }
        }
      }
    }
  `;

  const allContentfulBlog = `
    allContentfulBlog {
      edges {
        node {
          id
          url
          pageTemplate {
            id
            url
          }
        }
      } 
    }
  `;

  const query = `
    {
      ${allContentfulCustomPage}
      ${allContentfulProductCategory}
      ${allContentfulProduct}
      ${allContentfulState}
      ${allContentfulBlog}
    }
  `;

  return graphql(query).then(result => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

    result.data.allContentfulCustomPage.edges.map(edge => {
      createPage({
        path: cleanUrlSlash(edge.node.url),
        component: CustomPageTemplate,
        context: {
          id: edge.node.id,
        }
      });
    });

    result.data.allContentfulProductCategory.edges.map(edge => {
      if (edge.node.pageTemplate) {
        createPage({
          path: cleanUrlSlash(`${edge.node.pageTemplate.url}/${edge.node.slug}`),
          component: ProductCategoryPageTemplate,
          context: {
            productCategoryId: edge.node.id,
            pageTemplateId: edge.node.pageTemplate.id
          }
        });
      }
    });

    result.data.allContentfulProduct.edges.map(edge => {
      if (edge.node.pageTemplate) {
        createPage({
          path: cleanUrlSlash(`${edge.node.pageTemplate.url}/${edge.node.slug}`),
          component: ProductPageTemplate,
          context: {
            productId: edge.node.id,
            pageTemplateId: edge.node.pageTemplate.id
          }
        });
      }
    });

    result.data.allContentfulState.edges.map(edge => {
      if (edge.node.pageTemplate) {
        createPage({
          path: cleanUrlSlash(`${edge.node.pageTemplate.url}/${edge.node.slug}`),
          component: StatePageTemplate,
          context: {
            stateId: edge.node.id,
            pageTemplateId: edge.node.pageTemplate.id
          }
        });
      }
    });

    result.data.allContentfulBlog.edges.map(edge => {
      if (edge.node.pageTemplate) {
        createPage({
          path: cleanUrlSlash(`${edge.node.pageTemplate.url}/${edge.node.url}`),
          component: BlogPageTemplate,
          context: {
            blogId: edge.node.id,
            pageTemplateId: edge.node.pageTemplate.id
          }
        });
      }
    });

  });
};

exports.onPostBuild = async ({ graphql }) => {
  console.log("*** onPostBuild Start ***")

  const { data } = await graphql(`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      allContentfulCustomPage {
        edges {
          node {
            metaTitle
            url
            pageType
          }
        }
      }
      allContentfulProduct {
        edges {
          node {
            title
            slug
          }
        }
      }
      allContentfulProductCategory {
        edges {
          node {
            title
            slug
          }
        }
      }
      allContentfulState {
        edges {
          node {
             slug
          }
        }
      }
      allContentfulBlog {
        edges {
          node {
            id
            url
          }
        }
      }
    }
  `);

  const mapping = [
    {
      fileName: "sitemap-pages",
      getRecords: () => [
        { url: "/" },
        { url: "/shop/" },
        { url: "/red-iron-buildings/" }
      ]
    },
    {
      fileName: "sitemap-pages",
      getRecords: () => {
        const order = [
          "Barndominiums",
          "Commercial Red Iron Buildings",
          "Industrial Facilities",
          "Aircraft Hangars",
          "Agricultural Buildings",
          "Automotive Shops",
          "Church Buildings",
          "Recreational Buildings",
          "Government Buildings",
          "Storage Buildings"
        ];
        const products =
          data.allContentfulProductCategory.edges.map(d => ({
            url: "/red-iron-buildings/" + d.node.slug,
            title: d.node.title
          }))
        return products.sort((a, b) => {
          const aIndex = order.indexOf(a.title);
          const bIndex = order.indexOf(b.title);
          return aIndex - bIndex;
        });

      }
    },
    {
      fileName: "sitemap-pages",
      getRecords: () => [
        { url: "/building-packages/" },
        { url: "/service-area/" },
        { url: "/terms-and-conditions/" },
        { url: "/privacy-policy/" }
      ]
    },
    {
      fileName: "sitemap-products",
      getRecords: () => data.allContentfulProduct.edges.map(d => ({
        url: "/shop/" + d.node.slug,
      }))
    },
    {
      fileName: "sitemap-location",
      getRecords: () =>
        data.allContentfulState.edges
          .map(d => ({
            url: d.node.slug
          }))
    },
    {
      fileName: "sitemap-resources",
      getRecords: () => [
        // { url: "/financing/" },
        { url: "/insulation/" },
        { url: "/blog/" },
        { url: "/faqs/" },
        { url: "/color-options/" },
        { url: "/about-us/" },
        { url: "/contact-us/" },
      ]
    },
    {
      fileName: "sitemap-posts",
      getRecords: () => data.allContentfulBlog.edges.map(d => ({
        url: "/blog/" + d.node.url,
      }))
    },
  ];


  await generateSitemapFiles(mapping, __dirname, data.site.siteMetadata.siteUrl);

  console.log("*** onPostBuild End ***")

};

