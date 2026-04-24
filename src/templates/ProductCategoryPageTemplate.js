import React from "react";
import { graphql } from "gatsby";
import Layout from "src/components/layout";
import Seo from "src/components/seo";
import PageBlock from "src/blocks/PageBlock";

const ProductCategoryPageTemplate = ({ data, location }) => {
  const productList = data.allContentfulProduct.edges.map(d => d.node);
  let metaTitle = data.contentfulProductCategory.title;
  let metaDescription = data.contentfulProductCategory.title;
  if (data.contentfulProductCategory.extra) {
    let extra = JSON.parse(data.contentfulProductCategory.extra.internal.content);
    metaTitle = extra.meta.title;
    metaDescription = extra.meta.description;
  }

  return (
    <Layout location={location}>
      <Seo title={metaTitle} description={metaDescription} />
      {data.contentfulPageTemplate.blocks.map(d =>
        <PageBlock
          key={d.id}
          blockData={{
            ...d,
            productCategory: data.contentfulProductCategory,
            productList
          }}
        />
      )}
    </Layout >
  );
};

export default ProductCategoryPageTemplate;

export const pageQuery = graphql`
  query ProductCategoryPageTemplateQuery($productCategoryId: String!, $pageTemplateId: String!) {
    contentfulProductCategory(id: {eq: $productCategoryId}) {
      id
      title      
      description {
        childMarkdownRemark {
          html
        }
      }
      image {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      productListingTitle
      productListingSubTitle
      benefitHeading
      benefitSubHeading {
        childMarkdownRemark {
          html
        }
      }
      benefitCollections {
        id
        textShort
        textLong {
          childMarkdownRemark {
            html
          }
        }
      }
      customizationHeading
      customizationSubHeading {
        childMarkdownRemark {
          html
        }
      }
      customizationCollections {
        id
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
      faqHeading
      faqSubHeading {
        childMarkdownRemark {
          html
        }
      }
      faqCollections {
        id
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
      extra {
        internal {
          content
        }
      }
    }
    allContentfulProduct(
      filter: {category: {id: {eq: $productCategoryId}}}
    ) {
      edges {
        node {
          id
          title
          sku
          price
          slug
          imageMain {
            gatsbyImageData
          }
          pageTemplate {
            id
            url
          }
        }
      }
    }
    contentfulPageTemplate(id: {eq: $pageTemplateId}) {
      type
      url
      blocks {
        id
        type
        title
        subTitle
        description {
          childMarkdownRemark {
            html
          }
        }
        image {
          gatsbyImageData
        }
        mediaCollections {
          gatsbyImageData
          file {
            url
          }
        }
        refCollections {
          ... on ContentfulTinyContent {
              id
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
        extra {
          internal {
            content
          }
        }
      }
    }
  }
`;