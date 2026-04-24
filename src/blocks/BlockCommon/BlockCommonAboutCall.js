import React from "react";
import { Container, Section, SectionDescription, SectionTitle, SectionBox } from "src/components/Section";

const BlockCommonAboutCall = ({ data }) => {
  return (
    <Section $ept="0" $epb="80px" $xpt="0" $xpb="60px" $pt="0" $pb="40px" $bgcolor="#fff">
      <Container>
        <SectionBox $bgcolor="#F8FBFD" $borderColor="#E2EAEF">
          <SectionTitle>{data.title}</SectionTitle>
          <SectionDescription $mb="0" dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
        </SectionBox>
      </Container>
    </Section>
  );
};

export default BlockCommonAboutCall;