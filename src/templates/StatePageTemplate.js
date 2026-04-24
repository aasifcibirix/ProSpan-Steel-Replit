import React from "react";
import { graphql } from "gatsby";
import Layout from "src/components/layout";
import Seo from "src/components/seo";
import PageBlock from "src/blocks/PageBlock";

const StatePageTemplate = ({ data, location }) => {

  return (
    <Layout location={location}>
      <Seo
        title={data.contentfulState.metaTitle}
        description={data.contentfulState.metaDescription}
      />
      {data.contentfulPageTemplate.blocks.map(d =>
        <PageBlock key={d.id} blockData={{ ...d, state: data.contentfulState }} />
      )}
    </Layout >
  );
};

export default StatePageTemplate;

export const pageQuery = graphql`
  query StatePageTemplateQuery($stateId: String!, $pageTemplateId: String!) {
    contentfulState(id: {eq: $stateId}) {
      id
      slug
      metaTitle
      metaDescription
      title
      locationSubTitle
      locationDescription {
        childMarkdownRemark {
          html
        }
      }
      locationImage {
        gatsbyImageData
      }
      productTitle
      productSubTitle{
        productSubTitle
        childMarkdownRemark {
          html
        }
      }
      productCollections {
        id
        title
        slug
        imageMain {
          gatsbyImageData
        }
        sku
        price
        pageTemplate {
          id
          url
        }
      }
      permittingTitle
      permittingDescription {
        childMarkdownRemark {
          html
        }
      }
      ratingTitle
      ratingDescription {
        childMarkdownRemark {
          html
        }
      }
      faqTitle
      faqDescription {
        childMarkdownRemark {
          html
        }
      }
      faqCollections {
        id
        textShort
        textLong {
          textLong
          childMarkdownRemark {
            html
          }
        }
      }
      deliveryLocationTitle
      deliveryLocationDescription {
        childMarkdownRemark {
          html
        }
      }
      json {
        citydata
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