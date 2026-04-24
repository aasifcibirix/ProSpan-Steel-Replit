import React from "react";
import { graphql } from "gatsby";
import Layout from "src/components/layout";
import Seo from "src/components/seo";
import PageBlock from "src/blocks/PageBlock";

const CustomPageTemplate = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Seo title={data.contentfulCustomPage.metaTitle}
        description={data.contentfulCustomPage.metaDescription} />
      {data.contentfulCustomPage.blocks.map(d =>
        <PageBlock
          key={d.id}
          blockData={{ ...d, resources: data.contentfulCustomPage.resources }}
          location={location}
        />
      )
      }
    </Layout >
  );
};

export default CustomPageTemplate;

export const pageQuery = graphql`
  query CustomPageTemplateQuery($id: String!) {
    contentfulCustomPage(id: {eq: $id}) {
      id
      metaTitle
      metaDescription
      blocks {
        id
        type
        title
        titleLong {
          childMarkdownRemark {
            html
            rawMarkdownBody
          }
        }
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
          ... on ContentfulRichContent {
            id
            textShort
            textLong {
              textLong
              childMarkdownRemark {
                html
              }
            }
            contents {
              ... on ContentfulTinyContent {
                textShort
                textLong {
                  textLong
                }
              }
            }
          }
          ... on ContentfulProduct {
            id
            slug
            title
            imageMain {
              gatsbyImageData
            }
            sku
            price
            pageTemplate {
              url
            }
          }
          ... on ContentfulTinyContent {
            id
            identify
            textShort
            textLong {
              childMarkdownRemark {
                html
              }
              textLong
            }
            textContent {
              childMarkdownRemark {
                html
              }
            }
            image {
              gatsbyImageData
            }
            icon {
              file { 
                url
              }
            }
            extra {
              data
            }
          }
        }
        extra {
          internal {
            content
          }
        }
      }
      resources {
        ... on ContentfulTinyContent {
          id
          identify
          textShort
          textLong {
            id
            textLong
            childMarkdownRemark {
              html
            }
          }
          textContent {
            childMarkdownRemark {
              html
            }
          } 
          image {
            id
            gatsbyImageData
          }
          extra {
            citydata
            financing_button {
              link
              text
            }
          }
        }
        ... on ContentfulRichContent {
          id
          identify
          contents {
            ... on ContentfulProductCategory {
              id
              title
              slug
              summary {
                childMarkdownRemark {
                  html
                }
                summary
              }
              image {
                gatsbyImageData
              }
              pageTemplate {
                url
              }
            }
          }
        }
      }
    }
  }
`;