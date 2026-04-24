/*eslint-disable  no-unused-vars*/
import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby";
import { Container, Section, SectionTitle, SectionSubTitle, ExploreMore } from "src/components/Section";
import DefaultButton from "src/components/Button/DefaultButton";
import Pagination from "src/components/Pagination"
import styled from "styled-components";
import ProductCard from "src/components/ProductCard";

const Row = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin:0 -10px;  
`;

const Col = styled.div`
  position:relative;
  width:100%;
  padding:0 10px;
  @media(min-width:768px){
    flex:0 0 50%;
    max-width:50%;
  }
  @media(min-width:1200px){
    flex:0 0 33.333333%;
    max-width:33.333333%;
  }
`;

const BlockStateProductListing = ({ data, location }) => {
  const productListing = useStaticQuery(graphql`
    query {
      allContentfulProduct {
        edges {
          node {
            id
            title
            sku
            slug
            price
            pageTemplate {
              id
              url
            }
            imageMain {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);

  // const displayNumber = 15;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  // const totalItems = data.state.productCollections.length;
  // const totalPages = Math.ceil(totalItems / displayNumber);
  // const startIndex = (currentPage - 1) * displayNumber;
  // const endIndex = startIndex + displayNumber;
  const priorityProduction = data.state.productCollections
  const allProducts = productListing.allContentfulProduct.edges.map(c => c.node);
  const priorityTitles = priorityProduction ? priorityProduction.map(item => item.title) : [];



  // Create a map to store the desired order of priority titles
  const priorityOrderMap = new Map();
  priorityTitles.forEach((title, index) => {
    priorityOrderMap.set(title, index);
  });

  const sortedProducts = allProducts.sort((a, b) => {
    const aPriorityIndex = priorityOrderMap.has(a.title) ? priorityOrderMap.get(a.title) : -1;
    const bPriorityIndex = priorityOrderMap.has(b.title) ? priorityOrderMap.get(b.title) : -1;

    // Case 1: Both are priority items
    if (aPriorityIndex !== -1 && bPriorityIndex !== -1) {
      return aPriorityIndex - bPriorityIndex; // Sort by their order in priorityTitles
    }
    // Case 2: Only 'a' is a priority item
    if (aPriorityIndex !== -1) {
      return -1; // 'a' comes before 'b'
    }
    // Case 3: Only 'b' is a priority item
    if (bPriorityIndex !== -1) {
      return 1; // 'b' comes before 'a'
    }
    // Case 4: Neither is a priority item, maintain original order
    return 0;
  });

  const currentProducts = sortedProducts.slice(0, 15);

  // useEffect(() => {
  //   console.log('Current page changed to:', currentPage);
  //   console.log('Products for this page:', currentProducts.length);
  // }, [currentPage, currentProducts.length]);

  // const handlePageChange = (page) => {
  //   console.log('Page change requested to:', page);
  //   setCurrentPage(page);
  // };
  return (
    <Section className="section-product" $bgcolor="#111415">
      <Container>
        <SectionTitle $textAlign="center" $textColor="#fff" $mb="30px" className="h2-xl">
          <SectionSubTitle $textColor="#fff" >
            {data.state?.productTitle}
          </SectionSubTitle>
          {data.state?.productSubTitle?.productSubTitle}
        </SectionTitle>
        <Row key={`page-${currentPage}`}>
          {currentProducts.map(d =>
            <Col key={d.id}>
              <ProductCard data={d} location={location} />
            </Col>
          )}
        </Row>
        {/* {totalPages > 1 && (
          <Pagination
            display={displayNumber}
            length={totalItems}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )} */}
        <ExploreMore>
          <Link to="/shop">
            <DefaultButton text={data.view_button.text} />
          </Link>
        </ExploreMore>
      </Container>
    </Section>
  );
};

export default BlockStateProductListing;
