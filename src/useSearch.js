import { useStaticQuery, graphql } from "gatsby";

export const useSearch = (keyword, dataType, isSearch) => {
  const checkWithKeyword = (type, data, search) => {
    if (type === "products") {
      if (data.title.toLowerCase().includes(search.toLowerCase())) return true;

      const sku = data.sku.split("#")[1];
      if (data.sku.toLowerCase() === search.toLowerCase() || sku === search)
        return true;
    } else if (type === "tag") {
      if (data.toLowerCase().includes(search.toLowerCase())) return true;
    }

    return false;
  };

  const data = useStaticQuery(graphql`
    query {
      allContentfulProduct {
        edges {
          node {
            id
            metaTitle
            metaDescription
            title
            subTitle
            imageMain {
              gatsbyImageData(layout: FULL_WIDTH)
            }
            imageExtra {
              gatsbyImageData(layout: FULL_WIDTH)
            }
            price
            sku
            slug
            width
            length
            productDescription {
              childMarkdownRemark {
                html
              }
            }
            technicalSpecifications {
              childMarkdownRemark {
                html
              }
            }
            customizationOptions {
              childMarkdownRemark {
                html
              }
            }
            similarProductTitle
            similarProductList {
              id
              title
              sku
              price
              slug
              imageMain {
                gatsbyImageData(layout: FULL_WIDTH)
              }
              pageTemplate {
                id
                url
              }
            }
            contents {
              id
              identify
              textShort
              textLong {
                childMarkdownRemark {
                  html
                }
              }
              image {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  if (!isSearch && !keyword)
    return {
      results: [],
    };

  const products = data.allContentfulProduct.edges;
  let tTags = [];
  products.forEach((p) => {
    if (p.node.buildingTags) {
      tTags = [...tTags, ...p.node.buildingTags];
    }
  });
  const tags = [...new Set(tTags.map((tag) => tag.trim()))];

  const rProducts = (products || [])
    .map((p) => p.node)
    .filter((p) => checkWithKeyword("products", p, keyword));

  if (dataType === "products") {
    return {
      results: [...rProducts],
    };
  }

  const rTags = (tags || [])
    .filter((tag) => checkWithKeyword("tag", tag, keyword))
    .map((t) => ({ title: t, type: "tag" }));

  return {
    results: [...rProducts, ...rTags],
  };
};
