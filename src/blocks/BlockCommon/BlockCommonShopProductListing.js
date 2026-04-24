/*eslint-disable  no-unused-vars*/
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby";
import { Container, Section, SectionTitle, SectionSubTitle } from "src/components/Section";
import styled from "styled-components";
import ProductCard from "src/components/ProductCard";
import Pagination from "src/components/Pagination"

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

const BlockCommonShopProductListing = ({ data, location }) => {
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
  const displayNumber = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const priorityProduction = data.refCollections
  const allProducts = productListing.allContentfulProduct.edges.map(c => c.node);

  const priorityTitles = priorityProduction ? priorityProduction.map(item => item.title) : [];

  const sortedProducts = allProducts.sort((a, b) => {
    const aIsPriority = priorityTitles.includes(a.title);
    const bIsPriority = priorityTitles.includes(b.title);

    // If both are priority or both are not priority, maintain original order
    if (aIsPriority === bIsPriority) return 0;
    // If only a is priority, a comes first
    if (aIsPriority) return -1;
    // If only b is priority, b comes first
    return 1;
  });



  // Calculate pagination
  const totalItems = sortedProducts.length;
  const totalPages = Math.ceil(totalItems / displayNumber);
  const startIndex = (currentPage - 1) * displayNumber;
  const endIndex = startIndex + displayNumber;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);
  console.log("currentProducts", currentProducts)

  const handlePageChange = (page) => {
    setCurrentPage(page);

    // Universal scroll to top solution that works on ALL devices including iOS Safari
    const scrollToTop = () => {
      // Method 1: Modern browsers with smooth scroll support
      if (window.scrollTo && typeof window.scrollTo === 'function') {
        try {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (e) {
          // Method 2: Fallback for browsers without smooth scroll
          window.scrollTo(0, 0);
        }
      }

      // Method 3: Direct DOM manipulation (works on ALL browsers including iOS Safari)
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }

      // Method 4: Additional iOS Safari specific fix
      if (window.pageYOffset !== undefined) {
        window.scroll(0, 0);
      }
    };

    // Ensure scroll happens after React state update completes
    // This timing is critical for mobile browsers
    setTimeout(scrollToTop, 50);

    // Double-check with a second attempt (iOS Safari sometimes needs this)
    setTimeout(scrollToTop, 200);
  };


  return (
    <Section className="section-product" $bgcolor="#111415">
      <Container>
        {/* <SectionTitle $textAlign="center" $textColor="#fff" $mb="30px" className="h2-xl">
          <SectionSubTitle $textColor="#fff" >
            {data.title}
          </SectionSubTitle>
          {data.subTitle}
        </SectionTitle> */}
        <Row key={`page-${currentPage}`}>
          {currentProducts.map(d =>
            <Col key={d.id}>
              <ProductCard data={d} location={location} />
            </Col>
          )}
        </Row>
        {totalPages > 1 && (
          <Pagination
            display={displayNumber}
            length={totalItems}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </Container>
    </Section>
  );
};

export default BlockCommonShopProductListing;
