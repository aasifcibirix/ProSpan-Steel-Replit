import React, { useState } from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby";
import { Container, Section } from "src/components/Section";
import { Sidebar, SidebarCard, SidebarCardBody, SidebarCardTitle, SidebarForm } from "src/components/Sidebar";
import { StyleBlogCard, StyleBlogBody, StyleBlogFigure, StyleBlogName, StyleBlogDesc, StyleInfo, StyleItemInfo } from "src/components/BlogStyle";
import { CalenderIcon } from "src/components/Icons";
import Pagination from "src/components/Pagination"
import RequestForm from "src/components/RequestForm";
import BlogSearch from "src/components/BlogSearch";
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

const Grid = styled.div`
  display: grid;
  column-gap:10px;
  @media(min-width:992px){
    grid-template-columns: repeat(2, 1fr);
    column-gap:15px;
  }  
  @media(min-width:1600px){
    column-gap:30px;
  }

`;
const GridItem = styled.div`
  
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

const ButtonBadge = styled.button`
  border:1px solid #F0F0F0;
  background-color:#fff;
  color:#2A2829;
  display:flex;
  flex-wrap:wrap;
  border-radius:16px;
  .text{
    font-size:14px;
    line-height:26px;
    padding:2px 8px 2px 12px;
  }
  .count{
    display: flex;
    align-items: center;
    justify-content: center;
    min-width:40px;
    min-height:26px;
    background-color: #252525;
    border-radius:16px;
    font-size:14px;
    line-height:26px;
    color:#fff;
    margin:-1px;
  }
  &.selected{
    border-color:#252525;
    background-color:#252525;
    color:#fff;
    .count{
      background-color:#F32435;
    }
  }
  &:hover{
    border-color:#252525;
    background-color:#252525;    
    color:#fff;
    .count{
      background-color:#F32435;
    }
  }
`;

const ListBadge = styled.div`
 display: flex;
  flex-wrap: wrap;
  margin: -10px;
  .badge {
    margin: 10px;
  }
`;

const BlockCommonBlogBody = ({ data, location }) => {
  const resources = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: {createdAt: DESC}) {
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
      allContentfulBlogCategory(sort: {name: ASC}) {
        edges {
          node {
            name
          }
        }
      }
    }
  `);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const blogs = resources.allContentfulBlog.edges.map(d => d.node);
  const categories = resources.allContentfulBlogCategory.edges.map(d => d.node);
  const [searchText, setSearchText] = React.useState("");

  const searchBlogs = blogs.filter((data) => {
    return data.title.toLowerCase().includes(searchText.toLowerCase()) || data.author.toLowerCase() === searchText.toLowerCase();
  });


  const displayedBlogs = selectedCategory
    ? searchBlogs.filter((item) => item.category.name === selectedCategory)
    : searchBlogs;

  const renderSearchResult = () => {
    if (!displayedBlogs || !displayedBlogs.length) {
      return (
        <Grid>
          <p>Sorry, no post found.</p>
        </Grid>
      );
    }

    return (
      <Grid>
        {displayedBlogs.map((item, index) =>
          <GridItem key={index}>
            <StyleBlogCard className="card card-blog">
              <StyleBlogFigure className="card-figure">
                <Link to={`${item.pageTemplate.url}/${item.url}`}>
                  <GatsbyImage image={item.image.gatsbyImageData} alt={item.title} />
                </Link>
              </StyleBlogFigure>
              <StyleBlogBody className="card-body">
                <StyleInfo className="style-info">
                  <StyleItemInfo className="style-item"><span className="text">By: {item.author}</span></StyleItemInfo>
                  <StyleItemInfo className="style-item"><span className="icon"><CalenderIcon /></span><span className="text">{item.publishDate}</span></StyleItemInfo>
                  <StyleItemInfo className="style-item"><span className="badge">{item.category.name}</span></StyleItemInfo>
                </StyleInfo>
                <StyleBlogName className="blog-name"><Link to={`${item.pageTemplate.url}/${item.url}`}>{item.title}</Link></StyleBlogName>
                <StyleBlogDesc className="blog-desc"><p>{item.metaDescription.metaDescription}</p></StyleBlogDesc>
              </StyleBlogBody>
            </StyleBlogCard>
          </GridItem>
        )}
      </Grid>
    );
  };

  return (
    <Section className="section-blog" $bgcolor="#fff">
      <Container>
        <Row>
          <ColLeft>
            {renderSearchResult()}
            {displayedBlogs.length > 10 && <Pagination />}
          </ColLeft>
          <ColRight>
            <Sidebar className="isSticky">
              <SidebarCard className="tw-bg-transparent">
                <SidebarForm>
                  <BlogSearch blogs={blogs} onSearch={setSearchText} />
                </SidebarForm>
              </SidebarCard>
              <SidebarCard>
                <SidebarCardBody>
                  <SidebarCardTitle>Recent Posts</SidebarCardTitle>
                  <ListCardGrid>
                    {blogs.slice(0, 3).map((item, index) =>
                      <ListItemCard key={index}>
                        <StyleBlogCard className="card card-blog">
                          <StyleBlogFigure className="card-figure">
                            <Link to={`${item.pageTemplate.url}/${item.url}`}>
                              <GatsbyImage image={item.image.gatsbyImageData} alt={item.title} />
                            </Link>
                          </StyleBlogFigure>
                          <StyleBlogBody className="card-body">
                            <StyleBlogName className="blog-name"><Link to={`${item.pageTemplate.url}/${item.url}`}>{item.title}</Link></StyleBlogName>
                            <StyleInfo className="style-info">
                              <StyleItemInfo className="style-item"><span className="text">By: {item.author}</span></StyleItemInfo>
                              <StyleItemInfo className="style-item"><span className="text">{item.publishDate}</span></StyleItemInfo>
                            </StyleInfo>
                          </StyleBlogBody>
                        </StyleBlogCard>
                      </ListItemCard>
                    )}
                  </ListCardGrid>
                </SidebarCardBody>
              </SidebarCard>

              <SidebarCard bkgColor="transparent">
                <SidebarCardBody>
                  <SidebarCardTitle color="#252525">Blog Categories <hr /></SidebarCardTitle>
                  <ListBadge>
                    <ButtonBadge className={`badge ${selectedCategory === null ? 'selected' : ''}`} onClick={() => setSelectedCategory(null)}><span className="text">All Blogs</span><span className="count">{blogs.length}</span></ButtonBadge>
                    {categories.map((category) => {
                      const count = blogs.filter((item) => item.category.name === category.name).length;
                      if (count === 0) return null;
                      return (
                        <ButtonBadge className={`badge ${selectedCategory === category.name ? 'selected' : ''}`} key={category.name} onClick={() => setSelectedCategory(category.name)}>
                          <span className="text">{category.name}</span>
                          <span className="count">{count}</span>
                        </ButtonBadge>
                      );
                    })}
                  </ListBadge>
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

export default BlockCommonBlogBody;