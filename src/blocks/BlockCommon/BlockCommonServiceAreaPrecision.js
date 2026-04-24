import React from "react";
import { Container, Section, SectionDescription, SectionBox, SectionTitle } from "src/components/Section";

const BlockCommonServiceAreaPrecision = ({ data }) => {
  return (
    <Section $ept="10px" $epb="80px" $xpt="10px" $xpb="60px" $pt="10px" $pb="40px" $bgcolor="#fff">
      <Container>
        <SectionBox $pxy="5px" $bgcolor="#F8FBFD" $borderColor="#E2EAEF">
          <SectionTitle>{data.title}</SectionTitle>
          <SectionDescription $mb="0" dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
        </SectionBox>
      </Container>
    </Section>
  );
};

export default BlockCommonServiceAreaPrecision;