import React from "react"
import { Container, Section, SectionTitle } from "src/components/Section";
import SimilarProductCarousel from "src/components/SimilarProductCarousel";

const SimilarProduct = () => {
  return (
    <Section className="section-similar" $ept="80px" $epb="0" $xpt="60px" $xpb="0" $pt="40px" $pb="0" $bgcolor="#111415">      
      <Container>
        <SectionTitle $textColor="#fff" $textAlign="center">Check Out Similar Steel I-Beam Structures</SectionTitle>
        <SimilarProductCarousel />
      </Container>
    </Section>
  )
}

export default SimilarProduct
 