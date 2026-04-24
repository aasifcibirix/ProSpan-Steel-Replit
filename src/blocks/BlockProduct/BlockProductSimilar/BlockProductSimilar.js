import React from "react";
import { Container, Section, SectionTitle } from "src/components/Section";
import ProductCardCarousel from "./ProductCardCarousel";

const BlockProductSimilar = ({ data }) => {
  if (!data.product.similarProductList) {
    return null;
  }

  return (
    <Section className="section-similar" $ept="80px" $epb="0" $xpt="60px" $xpb="0" $pt="40px" $pb="0" $bgcolor="#111415">
      <Container>
        <SectionTitle $textColor="#fff" $textAlign="center" $mb="20px">
          {data.product.similarProductTitle}
        </SectionTitle>
        <ProductCardCarousel productList={data.product.similarProductList} />
      </Container>
    </Section>
  );
};

export default BlockProductSimilar;