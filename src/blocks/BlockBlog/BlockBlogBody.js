import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby";
import { Container, Section, MarkdownContent } from "src/components/Section";
import { Sidebar, SidebarCard, SidebarCardBody, SidebarCardTitle } from "src/components/Sidebar";
import { StyleBlogCard, StyleBlogBody, StyleBlogFigure, StyleBlogName, StyleInfo, StyleItemInfo } from "src/components/BlogStyle";
import { CalenderIcon } from "src/components/Icons";
import RequestForm from "src/components/RequestForm";
import styled from "styled-components";

const Row = styled.div`
  display:flex;
  flex-wrap:wrap; 
  margin:0 -10px;
  @media(min-width:992px){
    margin:0 -15px;
  }  
  @media(min-width:1600px){
    margin:0 -30px;
  }
`;

const ColLeft = styled.div`
  position:relative;
  width:100%;
  padding:0 10px;
  @media(min-width:992px){
    padding:0 15px;
  }  
  @media(min-width:1200px){
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  @media(min-width:1600px){
    padding:0 30px;
    flex: 0 0 70%;
    max-width: 70%;
  }
`;
const ColRight = styled.div`
  position:relative;
  width:100%;
  padding:0 10px;
  @media(min-width:992px){
    padding:0 15px;
  }  
  @media(min-width:1200px){
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  @media(min-width:1600px){
    flex: 0 0 30%;
    max-width: 30%;
    padding:0 30px;
  }
`;

const ListCardGrid = styled.div`
  position:relative;
`;

const ListItemCard = styled.div`
  .card{
    border:none;
    background-color:transparent;
    padding:0;
    border-radius:0;
    text-align:left;
    display:grid;
    grid-template-columns: 1fr 2fr;
    gap:10px;
    margin:0;
    height:auto;
    .card-figure{
      .gatsby-image-wrapper{
        border-radius: 10px;
      }
    }
    .card-body{     
      padding:0;
      .blog-name{
        font-size:16px;
        line-height:24px;
        font-weight:500;
        border-bottom:none;
        padding-bottom:0;
        margin-bottom:5px;
        
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        a{
          color:#fff;
          &:hover{
            color:#F32435;
          }
        }
      }
      .style-info{
        margin-bottom:0;    
        .style-item{
          margin-bottom:0;
          &:after{
            background-color:#949494;
          }
        }
      }
    }
  }
  padding-bottom:20px;
  margin-bottom:20px;
  border-bottom:1px solid #0B0B0B;
  &:last-child{
    border:none;
    padding-bottom:0;
    margin-bottom:0;
  }
  `;
const SinglePost = styled.div`
  position:relative;
`;
const SingleBlogThumb = styled.div`
  margin-bottom:30px;
`;
const ListGroup = styled.div`
  position:relative;
`;
const ListItemGroup = styled.div`
  cursor: pointer;
  text-decoration:underline;
  &:hover{
    text-decoration:none;
  }
  
`;

const BlockBlogBody = ({ data, location }) => {
  const resources = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: {url: ASC}) {
        edges {
          node {
            url
            pageTemplate {
              url
            }
            author
            publishDate(fromNow: true)
            title
            image {
              gatsbyImageData
            }
            metaTitle
            metaDescription {
              metaDescription
            }
            category {
              name
            }
          }
        }
      }
    }
  `);
  const blogs = resources.allContentfulBlog.edges;

  const handleScroll = (scrollTo) => {
    const headerDimension = document.getElementById('myHeader').getBoundingClientRect();
    const targetElementDimension = document.getElementById(scrollTo.replace("#", "")).getBoundingClientRect();
    window.scrollTo({
      top: targetElementDimension.top + window.scrollY - headerDimension.height - 30,
      behavior: "smooth",
    })
  };

  return (
    <Section className="section-blog" $bgcolor="#fff">
      <Container>
        <Row>
          <ColLeft>
            <SinglePost>
              <SingleBlogThumb>
                <GatsbyImage image={data.blog.image.gatsbyImageData} alt={data.title} />
              </SingleBlogThumb>

              <StyleInfo className="style-info">
                <StyleItemInfo className="style-item"><span className="text">By: {data.blog.author}</span></StyleItemInfo>
                <StyleItemInfo className="style-item"><span className="icon"><CalenderIcon /></span><span className="text">Aug 10, 2025</span></StyleItemInfo>
                <StyleItemInfo className="style-item"><span className="badge">{data.blog.category.name}</span></StyleItemInfo>
              </StyleInfo>

              <MarkdownContent dangerouslySetInnerHTML={{ __html: data.blog.content.childMarkdownRemark.html }} />
              <MarkdownContent>
                {data.blog.faqCollections &&
                  <div>
                    <div dangerouslySetInnerHTML={{ __html: data.blog.faqHeading }} />
                    <p>{data.blog.faqDescription.faqDescription}</p>
                    {data.blog.faqCollections.map((collection, index) => (
                      <div key={index}>
                        <h3>{collection.textShort}</h3>
                        <p>{collection.textLong.textLong}</p>
                      </div>
                    ))}
                  </div>
                }
              </MarkdownContent>

            </SinglePost>
          </ColLeft>
          <ColRight>
            <Sidebar className="isSticky">
              <SidebarCard bkgColor="#F8FBFD">
                <SidebarCardBody>
                  <SidebarCardTitle color="#0D0A0B">Table of Content</SidebarCardTitle>
                  <ListGroup>
                    {data.blog.tableOfContent && data.blog.tableOfContent.list.map((item, index) => (
                      <ListItemGroup key={index} onClick={() => handleScroll(item.scrollTo)}>{item.title}</ListItemGroup>
                    ))}
                  </ListGroup>
                </SidebarCardBody>
              </SidebarCard>
              <SidebarCard>
                <SidebarCardBody>
                  <SidebarCardTitle>Recent Posts</SidebarCardTitle>
                  <ListCardGrid>
                    {blogs.slice(0, 4).map((item, index) =>
                      <ListItemCard key={index}>
                        <StyleBlogCard className="card card-blog">
                          <StyleBlogFigure className="card-figure">
                            <Link to={`${item.node.pageTemplate.url}/${item.node.url}`}>
                              <GatsbyImage image={item.node.image.gatsbyImageData} alt={item.node.title} />
                            </Link>
                          </StyleBlogFigure>
                          <StyleBlogBody className="card-body">
                            <StyleBlogName className="blog-name"><Link to={`${item.node.pageTemplate.url}/${item.node.url}`}>{item.node.metaTitle}</Link></StyleBlogName>
                            <StyleInfo className="style-info">
                              <StyleItemInfo className="style-item"><span className="text">By: {item.node.author}</span></StyleItemInfo>
                              <StyleItemInfo className="style-item"><span className="text">{item.node.publishDate}</span></StyleItemInfo>
                            </StyleInfo>
                          </StyleBlogBody>
                        </StyleBlogCard>
                      </ListItemCard>
                    )}
                  </ListCardGrid>
                </SidebarCardBody>
              </SidebarCard>
              <SidebarCard>
                <SidebarCardBody>
                  <SidebarCardTitle $TextAlign="center">Quick Contact</SidebarCardTitle>
                  <RequestForm location={location} thanksURL="thank-you-quick-contact" />
                </SidebarCardBody>
              </SidebarCard>
            </Sidebar>
          </ColRight>
        </Row>
      </Container>
    </Section>
  )
}

export default BlockBlogBody;