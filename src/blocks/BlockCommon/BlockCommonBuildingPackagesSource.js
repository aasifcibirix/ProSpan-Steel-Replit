import React from "react";
import { Container, Section, SectionDescription, SectionTitle } from "src/components/Section";

const BlockCommonBuildingPackagesSource = ({ data }) => {
  return (
    <Section $ept="80px" $epb="0" $xpt="60px" $xpb="0" $pt="40px" $pb="0" $bgcolor="#fff">
      <Container $maxWidth="1410px">
        <SectionTitle>{data.title} </SectionTitle>
        <SectionDescription $mb="0" dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
      </Container>
    </Section>
  );
};

export default BlockCommonBuildingPackagesSource;