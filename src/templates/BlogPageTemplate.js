import React from "react";
import { graphql } from "gatsby";
import Layout from "src/components/layout";
import Seo from "src/components/seo";
import PageBlock from "src/blocks/PageBlock";

const BlogPageTemplate = ({ data, location }) => {

  return (
    <Layout location={location}>
      <Seo
        title={data.contentfulBlog.metaTitle}
        description={data.contentfulBlog.metaDescription?.metaDescription || ""}
      />
      {data.contentfulPageTemplate.blocks.map(d =>
        <PageBlock key={d.id} blockData={{ ...d, blog: data.contentfulBlog }} location={location} />
      )}
    </Layout >
  );
};

export default BlogPageTemplate;

export const pageQuery = graphql`
  query BlogPageTemplateQuery($blogId: String!, $pageTemplateId: String!) {
    contentfulBlog(id: {eq: $blogId}) {
      id
      url
      title
      author
      publishDate
      metaTitle
      metaDescription {
        childMarkdownRemark {
          html
        }
        metaDescription
      }
      category {
        name
      }
      image {
        gatsbyImageData
      }
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      tableOfContent {
        list {
          title
          scrollTo
        }
      }
      faqHeading
      faqDescription {
        faqDescription
      }
      faqCollections {
        textShort
        textLong {
          textLong
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