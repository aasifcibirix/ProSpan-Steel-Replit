/*eslint-disable  no-unused-vars*/
import React, { useState, useEffect } from "react"
import styled from "styled-components";
import Pagination from "src/components/Pagination"
import { Container, Section, SectionSubTitle, SectionTitle } from "src/components/Section";
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

const BlockCategoryProductListing = ({ data, location }) => {
  const displayNumber = 15;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const totalItems = data.productList.length;
  const totalPages = Math.ceil(totalItems / displayNumber);
  const startIndex = (currentPage - 1) * displayNumber;
  const endIndex = startIndex + displayNumber;
  const currentProducts = data.productList.slice(startIndex, endIndex);

  useEffect(() => {
    console.log('Current page changed to:', currentPage);
    console.log('Products for this page:', currentProducts.length);
  }, [currentPage, currentProducts.length]);

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
    <>
      {
        currentProducts.length > 0 &&
        <Section className="section-product" $bgcolor="#111415">
          <Container>

            <SectionTitle $textAlign="center" $textColor="#fff" $mb="30px" className="h2-xl">
              <SectionSubTitle $textColor="#fff" >
                {data.productCategory.productListingTitle}
              </SectionSubTitle>
              {data.productCategory.productListingSubTitle}
            </SectionTitle>

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
      }
    </>

  );
};

export default BlockCategoryProductListing;
