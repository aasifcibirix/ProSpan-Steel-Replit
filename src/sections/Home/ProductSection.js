import React from "react"
import styled from "styled-components";
import { Container, Section, SectionTitle, SectionSubTitle } from "../../components/Section";
import ProductCardSample from "../../components/ProductCard/ProductCardSample";
import Pagination from "src/components/Pagination";

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

const ProductSection = () => {
  return (
    <Section className="section-product" $bgcolor="#111415">
      <Container>
        <SectionTitle $textAlign="center" $textColor="#fff" $mb="30px" className="h2-xl" ><SectionSubTitle $textColor="#fff">SHOP Pre-Engineered</SectionSubTitle>Red-Iron Buildings</SectionTitle>
        <Row>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) =>
            <Col key={item}><ProductCardSample /></Col>
          )}
        </Row>
        <Pagination />
      </Container>
    </Section>
  )
}

export default ProductSection
