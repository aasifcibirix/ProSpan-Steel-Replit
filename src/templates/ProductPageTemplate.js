import React from "react";
import { graphql } from "gatsby";
import Layout from "src/components/layout";
import Seo from "src/components/seo";
import PageBlock from "src/blocks/PageBlock";

const ProductPageTemplate = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Seo
        title={data.contentfulProduct.metaTitle}
        description={data.contentfulProduct.metaDescription}
      />
      {data.contentfulPageTemplate.blocks.map(d =>
        <PageBlock key={d.id} blockData={{ ...d, product: data.contentfulProduct }} />
      )}
    </Layout >
  );
};

export default ProductPageTemplate;

export const pageQuery = graphql`
  query ProductPageTemplateQuery($productId: String!, $pageTemplateId: String!) {
    contentfulProduct(id: {eq: $productId}) {
      id
      metaTitle
      metaDescription
      title
      subTitle
      installLocation
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